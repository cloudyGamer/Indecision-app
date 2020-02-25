<?php

//CORS Request handling
if($_SERVER['REQUEST_METHOD'] == "GET") {

  header('Content-Type: text/plain');
  echo json_encode("This HTTP resource is designed to handle POSTed XML input");
} elseif($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
   echo json_encode("options taken");  
} elseif($_SERVER['REQUEST_METHOD'] == "POST") {
	//$curlRequest->info('response= POST conditions met');
	$url = $_POST["url"];
	//echo "the url should be...".$url;
  // Handle POST by first getting the XML POST blob, 
  // and then doing something to it, and then sending results to the client
   //my curl request goes here
	function do_curl_request($url, $params=array()) {
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_COOKIEJAR, '/tmp/apicookie.txt');
curl_setopt($ch, CURLOPT_COOKIEFILE, '/tmp/apicookie.txt');

$params_string = '';
if (is_array($params) && count($params)) {
foreach($params as $key=>$value) {
$params_string .= $key.'='.$value.'&';
}
rtrim($params_string, '&'); 

curl_setopt($ch,CURLOPT_POST, count($params));
curl_setopt($ch,CURLOPT_POSTFIELDS, $params_string);
}
//execute post
$result = curl_exec($ch);
//close connection
curl_close($ch);
return $result;
} 

$fields = array();

$newVar = do_curl_request($url);

$newVar = json_encode($newVar);
echo $newVar;    
    //echo $jsonResponse;  
  }
else{
    die("No Other Methods Allowed");
}

?>
