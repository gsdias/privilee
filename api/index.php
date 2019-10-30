<?php

include_once('./database.php');
include_once('./filters.php');

//Filtering fields
$nameFilter = @$_REQUEST['name'];
$discount_percentageFilter = @$_REQUEST['discount_percentage'];
$output = @$_REQUEST['output'] ?? 'json';

$db = new database('./data.json');

$db->resetFilter();
//loop through data to filter each element
foreach($db->output() as $i => $item) {
    if (strlen($nameFilter) > 0) {
        $item = filterByName($item, $nameFilter);
    }
    if (strlen($discount_percentageFilter) > 0) {
        $item = filterByDiscount($item, $discount_percentageFilter);
    }
    if ($item != false) {
        $db->filtered($item);
    }
}

$db->output($output);