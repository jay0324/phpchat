<?php
//web config
require("../../config.php");
require("../../class/public_class.php");

//頁面參數
$tmpString->funcTitle = '圖片編輯';

//頁面動作
if (fnCheckLogin()){
	//已成功
	//process action
	switch ($_REQUEST['action']){
		case 'others':
			//其他動作
			
		break;
		default:
			//預設動作
		break;
	}

	//輸出
	echo useTmp('view.html', $tmpString);

}else{
	//未登入
	echo useTmp('view.html', $tmpString);
}

?>