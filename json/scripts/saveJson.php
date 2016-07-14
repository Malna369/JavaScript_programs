<?php
// Saving data
$updatedData = $_POST['newData'];
file_put_contents('persons.json', $updatedData);
?>