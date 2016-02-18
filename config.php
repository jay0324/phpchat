<?php
session_start();

/* 
建立一個config object
*/
class object {};
$config = new object;
$tmpString = new object;

//全站時間
date_default_timezone_set("Asia/Taipei");

//版本號碼
$config->appname = "PHP ChartRoom";
$config->version = "v1.0.1";

//路徑及目錄
$config->uri = "http://".$_SERVER['HTTP_HOST']."/develop_module/php_chart_room/chart_room";
$config->root = dirname(__FILE__);


//資料庫連結設定
$dbhost = "localhost";#db_host
$dbname = "phpchartroom";#db名稱
$dbuser = "root";#db帳號
$dbpass = "root";#db密碼
$mysqli = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
$mysqli->query("SET NAMES 'utf8'"); //db encode utf8
$config->mysqli = $mysqli;

//log設定
$config->log_path = $config->root."/log/"; //log檔存取位置
$config->log_file = 30; //保留log檔數量

//TMP View 預先載入應用程式參數
$tmpString->appname = $config->appname;
$tmpString->version = $config->version;
$tmpString->primaryNav = '<div id="nav">
	                            <ul>
	                                <li><a href="../list/">好友列表</a></li>
	                                <li><a href="../info/?id={myID}">個人資訊</a></li>
	                                <li><a href="../logout/">登出</a></li>
	                            </ul>
	                        </div>';

?>