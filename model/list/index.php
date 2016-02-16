<?php
//web config
require("../../config.php");
require("../../class/public_class.php");
//頁面參數
$toID = $_GET['id']; //取得刪除目標的聊天ID
$tmpString->funcTitle = '好友列表';

//頁面動作
if (fnCheckLogin()){
	//已成功
	switch ($_REQUEST['action']){
		case "deleteFriend":
			deleteFriend($toID);
			header('location: '.$_SERVER['PHP_SELF']);
		break;
		case "search":
			//搜尋使用者
			$tmpString->pauseUpdate = 1;
			if (isset($_POST['find']) && !empty($_POST['find'])){
				$tmpString->funcTitle = '搜尋['.$_POST['find'].']結果';
				$res = searchAllUser($_POST['find']);
			}else{
				$res = getAllUser();
			}

			//檢查自己的好友列表
			$chkusername = array();
			$sql = "select list from friendlist Where username = '".$_SESSION['username']."'";
			$resChk = mysqli_query($config->mysqli, $sql);
			if (mysqli_num_rows($resChk) > 0) {
				$chk = mysqli_fetch_array($resChk);
				$chkArry = json_decode($chk['list'], true);
				foreach($chkArry as &$item) {
					array_push($chkusername,$item['username']);
				}
			}

			//取得搜尋列表
			while($list = mysqli_fetch_array($res)){
				if (in_array($list['username'],$chkusername)){
					$setButton = '<a class="btn" href="../chart/?id='.$list['username'].'">聊天</a>
								  <a class="btn" href="../list/?id='.$list['username'].'&action=deleteFriend">刪除好友</a>';
				}else{
					$setButton = '<a class="btn" href="../chart/?id='.$list['username'].'&action=addFriend">加入好友</a>';
				}

				$friendList .= '<div class="resCol2 center listitemWrap"><div class="resMargin listitem">
				                    <img src="img/test_300x300.jpg" /><br>
				                    <div>'.$list['name'].'</div>
				                    '.$setButton.'
				                    <a class="btn" href="../info/?id='.$list['username'].'">個人資料</a>
				               </div></div>';
			}
		break;
		default:
			//取得好友列表
			$tmpString->pauseUpdate = 0;
			$res = getAllFriend();
			if ($res) {
				foreach ($res as &$list) {
					$friendList .= '<div class="resCol2 center listitemWrap"><div class="resMargin listitem">
					                    <img src="img/test_300x300.jpg" /><br>
					                    <div>'.fnGetUserInfo($list['username'],'name').'</div>
		                        		<div>'.fnEventAlert($list['unread']).'</div>
					                    <a class="btn" href="../chart/?id='.$list['username'].'">聊天</a>
					                    <a class="btn" href="../list/?id='.$list['username'].'&action=deleteFriend">刪除好友</a>
					                    <a class="btn" href="../info/?id='.$list['username'].'">個人資料</a>
					               </div></div>';
				}
			}else{
				$friendList = '<p align="center">您目前沒有任何好友,可以透過搜尋來尋找使用者!</p>';
			}
		break;
	}
	
	

	$tmpString->friendList = $friendList;
	echo useTmp('view.html', $tmpString);
}else{
	//未登入
	header("location: ".$config->uri."/model/login/");
}

?>