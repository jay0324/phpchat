<?php
//web config
require("../../config.php");
require("../../class/public_class.php");

//function
function fnRegister($post){
	global $config;

	$sql = "INSERT INTO user (
		username,
		password,
		name
		) VALUE (
		'".$post['username']."',
		'".md5($post['password'])."',
		'".$post['name']."'
		)";

	$res = mysqli_query($config->mysqli, $sql);

	if ($res){
		//註冊成功後進行登入
		$_SESSION["username"] = $post["username"];
		header("location: ".$config->uri."/model/list/");
	}else{
		fnLog("資料庫連結錯誤: ".mysqli_error($config->mysqli));
	}

}

//process action
switch ($_REQUEST['action']){
	case 'register':
		fnRegister($_POST);
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