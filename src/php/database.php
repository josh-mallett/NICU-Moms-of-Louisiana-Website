<?php

// Contains connection to SQL database
require 'connection.php';

function insertIntoDatabase($inputs) {
  // Connects to database using Connect() from connection.php
  $connection = Connect();

  // Makes sure each value is correctly formatted to be used in a SQL statement.
  $first_name = $connection->real_escape_string($inputs[0]);
  $last_name = $connection->real_escape_string($inputs[1]);
  $email = $connection->real_escape_string($inputs[2]);
  $subject = $connection->real_escape_string($inputs[3]);
  $message = $connection->real_escape_string($inputs[4]);

  // SQL query string declared into variable.
  $query = "INSERT into form_data(first_name, last_name, email, subject, message) VALUES('".$first_name."','".$last_name."','".$email."','".$subject."','".$message."')";

  // Performs SQL insertion into the database.
  $insertion = $connection->query($query);
  // Return false and close connection if query was unsuccessful
  if (!$insertion) {
    mysqli_close($connection);
    return false;
  }
  // Return true and close connection if query was successful
  else {
    mysqli_close($connection);
    return true;
  }

}

?>
