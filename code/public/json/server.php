<?php

date_default_timezone_set('ASIA/KOLKATA');
$cur_date = date('Y-m-d');
$dbc = null;

try {
    $dbc = new PDO("mysql:host=localhost;dbname=react-cheat-sheet", "root", "");
    $dbc->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
}
catch(PDOException $e) {
    die("Error in connection to the database");
}

?>