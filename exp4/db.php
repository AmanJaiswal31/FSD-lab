<?php
$conn = mysqli_connect("localhost", "root", "sarthak@123", "studentdb");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>