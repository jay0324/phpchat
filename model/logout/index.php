<?php
//web config
require("../../config.php");
require("../../class/public_class.php");

//process action
switch ($_REQUEST['action']){
	case 'no':
		header("location: ".$config->uri."/model/list/");
		break;
	case 'yes':
		session_destroy();
		header("location: ".$config->uri."/model/login/");
		break;
	default:
		echo useTmp('view.html', $tmpString);
		break;
}

?>