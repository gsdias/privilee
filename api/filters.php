<?php

function filterByName($item, $filter) {
    if (strstr($item->name, $filter) == FALSE) {
        return false;
    }
    return $item;
}
function filterByDiscount($item, $filter) {
    if ($item->discount_percentage != $filter) {
        return false;
    }
    return $item;
}