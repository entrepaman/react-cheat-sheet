<?php
header("Access-Control-Allow-Origin: *");
include_once('helpers/set_and_empty_check.php');
include_once('server.php');

error_reporting(E_ALL);
ini_set('display_errors',1);

$return_data = [];

if(set_and_empty_check($_SERVER['HTTP_REFERER'])) {
    $http_referer = $_SERVER['HTTP_REFERER'];
    if($http_referer == 'http://localhost:3000/') {
        $return_data['status'] = 'success';
        $get_contents_heading_query = "SELECT id, heading FROM headings WHERE deleted_at IS NULL";
        $contents_heading_result = $dbc->prepare($get_contents_heading_query);
        if($contents_heading_result->execute(array())) {
            $return_data_index = 0;
            while($contents_heading = $contents_heading_result->fetch()) {
                $get_contents_query = "SELECT content FROM contents WHERE heading_id = ? AND deleted_at IS NULL";
                $contents_result = $dbc->prepare($get_contents_query);
                $contents_index = 0;
                $content_existence_flag = 0;
                if($contents_result->execute(array($contents_heading['id']))) {
                    while($contents = $contents_result->fetch()) {
                        $content_existence_flag = 1;
                        $return_data['data'][$return_data_index]['content'][$contents_index++] = $contents['content'];
                    }
                    if($content_existence_flag == 1) {
                        $return_data['data'][$return_data_index]['id'] = $contents_heading['id'];
                        $return_data['data'][$return_data_index]['heading'] = $contents_heading['heading'];
                    }
                }
                $return_data_index++;
            }
        } else {
            $return_data['msg'] = 'some errror';
        }

    } else {
        $return_data['status'] = 'failed';
        $return_data['msg'] = 'not authorized';
    }
} else {
    $return_data['status'] = 'failed';
}

echo json_encode($return_data);

?>