<?php

$postData = json_decode(file_get_contents('php://input'), true);
$contentType = getallheaders()['Content-Type'];
if (empty($contentType) || $contentType !== 'application/json') {
    echo "Invalid Request. Please check contentType";
} elseif (empty($postData['username'])) {
    echo "Validation error. Please check the input data";
} else {
    echo "successful";
}
