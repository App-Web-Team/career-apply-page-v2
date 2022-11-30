<?php
$conn = mysqli_connect("localhost", "root", "", "career-apply");

// Check connection
if ($conn === false) {
    die("ERROR: Could not connect. "
        . mysqli_connect_error());
}

$select = "SELECT * FROM `pd`";
$result = $conn->query($select);

while($row = $result->fetch_object()){
    $pdf = $row->filename;
    $path = $row->directory;
    $date = $row->created_date;
  }
