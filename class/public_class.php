<?php
//login check
function fnCheckLogin(){
	global $config;
	if (isset($_SESSION['username']) && !empty($_SESSION['username'])){
		return true;
	}else{
		return false;
	}
}

//寫log
function fnLog($msg){
	global $config;
	//寫入今天的log檔
	$file_name = $config->log_path.date("Ymd").".log";
	//保留log檔數量
	$log_file = $config->log_file;
	
	//查看log檔案是否存在,不存在就建立
	if(!(file_exists($file_name))){
         $file=fopen($file_name,"w");
		 fclose($file);
		 chmod($file_name, 0777); //開啟可寫權限
		 
		 //建立同時刪除舊的追蹤檔案
		 $deletefile = "log/".date("Ymd", mktime(0, 0, 0, date("m"), date("d")-intval($log_file),   date("Y"))).".log";
		 if(file_exists($deletefile)){
			 unlink($deletefile);
		 }
	}
	
	//寫入今天的log
	$current = date("Y-m-d H:i:s").": ".$msg."\n";
	$current .= file_get_contents($file_name);
	file_put_contents($file_name, $current);
}

//簡易html template
function useTmp($tmpPath, $replaceString){
	$output = file_get_contents($tmpPath);
	foreach ($replaceString as $key => $value) {
		$output = str_replace('{'.$key.'}',$value,$output);
	}
	return $output;
}

//更新訊息
function updateMsg($toID, $msg){
	global $config;
	$chartID = 'cht_'.md5($_SESSION['username'].$toID);
	$chartID2 = 'cht_'.md5($toID.$_SESSION['username']);
	$sql = "Select chart_content from chartlist where chart_id = '".$chartID."' OR chart_id = '".$chartID2."'";
	$res = mysqli_query($config->mysqli, $sql);
	$row = mysqli_fetch_array($res);
	$update_chart_content = array();
	//處理新訊息
	$new_msg = fnProcessMsg($_SESSION['username'], $toID, $msg);

	if (mysqli_num_rows($res) > 0) {
		//處理舊訊息
		$old_chart_content = json_decode($row['chart_content'],true);
		array_push($old_chart_content, $new_msg);
		$update_chart_content = json_encode($old_chart_content);
		//var_dump($update_chart_content);die();
		//寫入資料庫
		$sql = "Update chartlist set 
				chart_content = '".$update_chart_content."' 
				where chart_id = '".$chartID."' OR chart_id = '".$chartID2."'";
		$res = mysqli_query($config->mysqli, $sql);
	}else{
		//加入新訊息
		array_push($update_chart_content, $new_msg);

		//寫入資料庫
		$sql = "Insert into chartlist (
				chart_content,
				chart_id) 
				value (
				'".json_encode($update_chart_content)."',
				'".$chartID."')";
		$res = mysqli_query($config->mysqli, $sql);//var_dump($res);die();
	}

	//更新好友列表中的訊息讀取狀態
	updateEvent($toID, 'new');
}

//處理訊息
function fnProcessMsg($from,$to,$msg){
	return array(
		'from'=>$from,
		'to'=>$to,
		'date'=>time(),
		'ip'=>$_SERVER['REMOTE_ADDR'],
		'msg'=>urlencode($msg)
	);
}

//讀訊息狀態
function updateEvent($toID, $event){
	global $config;
	$updateArray = array();

	if ($event == 'new') {
		//push新訊息
		$from = $toID;
		$to = $_SESSION['username'];
		$event = 1;
	}else if ($event == 'read'){
		//push訊息已讀取
		$from = $_SESSION['username'];
		$to = $toID;
		$event = 0;
	}

	//更新資料
	$sql = "Select list from friendlist where username = '".$from."'";
	$res = mysqli_query($config->mysqli, $sql);
	$list = mysqli_fetch_array($res);
	$friend = json_decode($list['list'],true);
	foreach ($friend as &$item) {
		if ($item['username'] == $to){
			$updateItem = array(
				'username'=>$to,
				'unread'=>$event
			);
			array_push($updateArray, $updateItem);
		}else{
			array_push($updateArray, $item);
		}
	}
	$sql = "Update friendlist set list = '".json_encode($updateArray)."' Where username = '".$from."'";
	$res = mysqli_query($config->mysqli, $sql);
}

//讀取訊息
function getMsg($toID){
	global $config;
	$chartID = 'cht_'.md5($_SESSION['username'].$toID);
	$chartID2 = 'cht_'.md5($toID.$_SESSION['username']);
	$sql = "Select chart_content from chartlist where chart_id = '".$chartID."' OR chart_id = '".$chartID2."'";
	$res = mysqli_query($config->mysqli, $sql);
	$row = mysqli_fetch_array($res);

	//更新好友列表中的訊息讀取狀態
	updateEvent($toID, 'read');

	return json_decode($row['chart_content'],true);
}

//讀取所有使用者清單
function getAllUser(){
	global $config;
	$sql = "Select * from user where state != 0 AND username != '".$_SESSION['username']."'";
	$res = mysqli_query($config->mysqli, $sql);
	return $res;
}

//搜尋所有使用者清單
function searchAllUser($key){
	global $config;
	$sql = "Select * from user where (username like '%".$key."%' OR name like '%".$key."%') AND state != 0 AND username != '".$_SESSION['username']."'";
	$res = mysqli_query($config->mysqli, $sql);
	return $res;
}

//讀取所有使用者清單
function getAllFriend(){
	global $config;
	$sql = "Select list from friendlist where username = '".$_SESSION['username']."'";
	$res = mysqli_query($config->mysqli, $sql);
	if (mysqli_num_rows($res) > 0) {
		$list = mysqli_fetch_array($res);
		$friendList = json_decode($list['list'], true);
	}

	return $friendList;
}

//加入好友
function addFriend($toID){
	global $config;

	//先檢查自己的好友列表
	$updateArray = array();
	$sql = "Select list from friendlist where username = '".$_SESSION['username']."'";
	$res = mysqli_query($config->mysqli, $sql);
	if (mysqli_num_rows($res) > 0) {
		$list = mysqli_fetch_array($res);
		$updateArray = json_decode($list['list'], true);
		$exist = false; //檢查是否好友已經存在在列表中
		foreach ($updateArray as &$item){
			if ($item['username'] == $toID) $exist = true;
		}
		//如果好友不存在才存入
		if(!$exist) {
			$newFriend = array('username'=>$toID, 'unread'=>0);
			array_push($updateArray, $newFriend);
			$sql = "Update friendlist set list = '".json_encode($updateArray)."' Where username = '".$_SESSION['username']."'";
			$res = mysqli_query($config->mysqli, $sql);
		}
	}else{
		//製作好友字串
		$newFriend = array('username'=>$toID, 'unread'=>0);
		array_push($updateArray, $newFriend);
		$sql = "Insert into friendlist (
				username,
				list
				) value (
				'".$_SESSION['username']."',
				'".json_encode($updateArray)."'
				)";
		$res = mysqli_query($config->mysqli, $sql);
	}

	//再檢查對方的好友列表
	$updateArray = array();
	$sql = "Select list from friendlist where username = '".$toID."'";
	$res = mysqli_query($config->mysqli, $sql);
	if (mysqli_num_rows($res) > 0) {
		$list = mysqli_fetch_array($res);
		$updateArray = json_decode($list['list'], true);
		$newFriend = array('username'=>$_SESSION['username'], 'unread'=>1);
		array_push($updateArray, $newFriend);
		$sql = "Update friendlist set list = '".json_encode($updateArray)."' Where username = '".$toID."'";
		$res = mysqli_query($config->mysqli, $sql);
	}else{
		//製作好友字串
		$newFriend = array('username'=>$_SESSION['username'], 'unread'=>1);
		array_push($updateArray, $newFriend);
		$sql = "Insert into friendlist (
				username,
				list
				) value (
				'".$toID."',
				'".json_encode($updateArray)."'
				)";
		$res = mysqli_query($config->mysqli, $sql);
	}

	//加入通知訊息
	$msg = "Hello, my name is ".fnGetUserInfo($_SESSION['username'],'name').", I am adding you to my friend!";
	updateMsg($toID, $msg);
}

//刪除好友
function deleteFriend($toID){
	global $config;

	//先檢查自己的好友列表
	$updateArray = array();
	$sql = "Select list from friendlist where username = '".$_SESSION['username']."'";
	$res = mysqli_query($config->mysqli, $sql);
	$list = mysqli_fetch_array($res);
	$oldArray = json_decode($list['list'], true);
	foreach ($oldArray as &$item) {
		if ($item['username'] != $toID) {
			array_push($updateArray, $item);
		}
	}

	if ($updateArray != "") {
		$sql = "Update friendlist set list = '".json_encode($updateArray)."' Where username = '".$_SESSION['username']."'";
	}else{
		$sql = "Delete from friendlist Where username = '".$_SESSION['username']."'";
	}
	
	$res = mysqli_query($config->mysqli, $sql);

	//再檢查對方的好友列表
	$updateArray = array();
	$sql = "Select list from friendlist where username = '".$toID."'";
	$res = mysqli_query($config->mysqli, $sql);
	$list = mysqli_fetch_array($res);
	$oldArray = json_decode($list['list'], true);
	foreach ($oldArray as &$item) {
		if ($item['username'] != $_SESSION['username']) {
			array_push($updateArray, $item);
		}
	}

	if ($updateArray != "") {
		$sql = "Update friendlist set list = '".json_encode($updateArray)."' Where username = '".$toID."'";
	}else{
		$sql = "Delete from friendlist Where username = '".$toID."'";
	}
	
	$res = mysqli_query($config->mysqli, $sql);
}

//取得使用者ID的相關內容
function fnGetUserInfo($user_id,$field){
	global $config;
	$sql = "Select ".$field." from user where username = '".$user_id."'";
	$res = mysqli_query($config->mysqli, $sql);
	$list = mysqli_fetch_array($res);
	return $list[$field];
}

//訊息狀態通知
function fnEventAlert($val){
	if ($val == 1) {
		return '<span class="alert">有訊息</span>';
	}
}

//格式訊息
function fnFormateChart($msg_obj){
	foreach($msg_obj as &$line){
			$name = fnGetUserInfo($line['to'],'name');
			$date = date('Y-m-d H:i:s',$line['date']);
			if ($line['from'] == $_SESSION['username']){
				$outputMsg .= '<div class="resCol12 chtline"><div class="resMargin sayto">'.
			                        html_entity_decode(urldecode($line['msg'])).
			                        '<div class="date">'.$date.'</div>'.
			                    '</div></div>';
			}else{
				$outputMsg .= '<div class="resCol12 chtline"><div class="resMargin sayfrom">'.
			                        $name.'('.$line['ip'].'): <br>'.html_entity_decode(urldecode($line['msg'])).
				                    '<div class="date">'.$date.'</div>'.
			                    '</div></div>';
			}
			
	}

	return $outputMsg;
}

?>