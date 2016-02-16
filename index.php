<?php
//web config
require("config.php");
require("class/public_class.php");

if(fnCheckLogin()) {
	header("location:model/list/");
}else{
	header("location:model/login/");
}

?>