<?php
//web config
require("../../config.php");
require("../../class/public_class.php");

//param
$tmpString->errorMsg = "";

//function
function fnLogin($username, $password){
	global $config;

	$sql = "SELECT * FROM user WHERE username = '".$username."' AND password = '".md5($password)."'";
	$res = mysqli_query($config->mysqli, $sql);
	
	if ($res){
		$row = mysqli_num_rows($res);
		if ($row > 0) {
			//登入成功
			$list = mysqli_fetch_array($res);
			$_SESSION["username"] = $list["username"];
			header("location: ".$config->uri."/model/list/");
		}else{
			//登入失敗
			header("location: ".$_SERVER['PHP_SELF'].'?action=fail');
		}
	}else{
		fnLog("資料庫連結錯誤: ".mysqli_error($config->mysqli));
	}

}

//process action
switch ($_REQUEST['action']){
	case 'fail':
		$tmpString->errorMsg = '您登入的帳密錯誤';
		echo useTmp('view.html', $tmpString);
		break;
	case 'login':
		fnLogin($_POST['username'], $_POST['password']);
		break;
	default:
		if (fnCheckLogin()){
			header("location: ".$config->uri."/model/list/");
		}else{
			echo useTmp('view.html', $tmpString);
		}
		break;
}

?>