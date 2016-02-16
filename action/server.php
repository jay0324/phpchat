<?php
//web config
require("../config.php");
require("../class/public_class.php");

//update chart data
switch($_POST['action']){
	case 'updateChart':
		echo getMsg($_POST['id']);
	break;
	case 'updateEvent':
		if (isset($_POST['pause']) && $_POST['pause'] == 1) {
			$friendList = 'pause';
		}else{
			$res = getAllFriend();
			if ($res) {
				foreach ($res as &$list) {
					switch($_POST['type']) {
						case 'list':
							$friendList .= '<div class="resCol2 center listitemWrap"><div class="resMargin listitem">
							                    <img src="img/test_300x300.jpg" /><br>
							                    <div>'.fnGetUserInfo($list['username'],'name').'</div>
				                        		<div>'.fnEventAlert($list['unread']).'</div>
							                    <a class="btn" href="../chart/?id='.$list['username'].'">聊天</a>
							                    <a class="btn" href="../list/?id='.$list['username'].'&action=deleteFriend">刪除好友</a>
							                    <a class="btn" href="../info/?id='.$list['username'].'">個人資料</a>
							               </div></div>';
						break;
						default:
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
						break;
					}
				}
			}else{
				$friendList = '<p align="center">您目前沒有任何好友,可以透過搜尋來尋找使用者!</p>';
			}
		}
		echo $friendList;
	break;
}

?>