<?php
$UserName = $post['UserName'];
$EmailId = $post['EmailId'];
$UserPassword = $post['UserPassword'];
$ConformPassword = $post['ConformPassword'];

// database connection
$conn = new mysqli('localhost', 'root', '', 'saurabh_project');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $start = $conn->prepare("INSERT INTO registration (UserName, EmailId, UserPassword, ConformPassword) VALUES (?, ?, ?, ?)");
    $start->bind_param("ssss", $UserName, $EmailId, $UserPassword, $ConformPassword);
    $start->execute();
    echo "Registration Successfully";
    $start->close();
    $conn->close();
}
?>
