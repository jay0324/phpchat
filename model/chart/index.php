<?php
//web config
require("../../config.php");
require("../../class/public_class.php");

//頁面參數
$toID = $_GET['id']; //取得目前的聊天ID
$toName = fnGetUserInfo($toID,'name'); //取得目前聊天對象名稱
$tmpString->funcTitle = '您與好友['.$toName.']的對話內容';

//頁面動作
if (fnCheckLogin()){
	//已成功
	//process action
	switch ($_REQUEST['action']){
		case "addFriend":
			addFriend($toID);
		break;
		case 'updateMsg':
			//更新訊息
			if (isset($_POST['addMsg']) && !empty($_POST['addMsg'])) {
				$msg = $_POST['addMsg'];
				updateMsg($toID, $msg);
			}
		break;
	}

	//取得好友列表
	$res = getAllFriend();
	foreach ($res as &$list) {
	    $friendList .= '<div class="resRow">
	                        <div class="resCol6"><div class="resMargin">
	                            <img src="img/test_300x300.jpg" />
	                        </div></div>
	                        <div class="resCol6"><div class="resMargin">
	                        	名字: '.fnGetUserInfo($list['username'],'name').'<br>
	                        	'.fnEventAlert($list['unread']).'<br>
	                            <a class="btn" href="../chart/?id='.$list['username'].'">聊天</a>
	                            <a class="btn" href="../list/?id='.$list['username'].'&action=deleteFriend">刪除好友</a>
	                            <a class="btn" href="../info/?id='.$list['username'].'">個人資料</a>
	                        </div></div>
	                    </div>';
	}

	$tmpString->chartTo = $toID;
	$tmpString->friendList = $friendList;
	$tmpString->msg = getMsg($toID);
	echo useTmp('view.html', $tmpString);

}else{
	//未登入
	header("location: ".$config->uri."/model/login/");
}

?>