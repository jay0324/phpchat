<?php
	ignore_user_abort(true); //允許背景處理機制
	set_time_limit(0);	//不限制處理時間

	//webjob的設定值
	$sleep = 1*60; //紀錄時間 (以秒為單位)
	$state = true;

	//執行動作
if ($state){

	//執行的動作
	fnWebjob();
	
	//呼叫自己執行的迴圈,用這總方式可以釋放記憶體
    sleep($sleep); // sleep
	$ch = curl_init();
    $options = array( 
      CURLOPT_URL => "http://".$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF']."?timestamp=".$currentTimestamp, 
      CURLOPT_HEADER => false, 
      CURLOPT_RETURNTRANSFER => true, 
      CURLOPT_TIMEOUT=>1,
      CURLOPT_USERAGENT => "update chart", 
      CURLOPT_FOLLOWLOCATION => true
    );
    curl_setopt_array($ch, $options);
    curl_exec($ch);
	curl_close($ch);
}

//執行工作
function fnWebjob(){

}

?>