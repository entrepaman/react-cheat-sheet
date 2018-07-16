<?php
header("Access-Control-Allow-Origin: *");
$http_referer = $_SERVER['HTTP_REFERER'];
$return_data['data'] = $http_referer;
echo json_encode($return_data);

?>