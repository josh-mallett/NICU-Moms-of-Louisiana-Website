<?php

function test_input($input) {
  // Removes whitespace at the beginning and end of the input string.
  $input = trim($input);
  // Removes all backslashes from the input string.
  $input = stripslashes($input);
  // Encodes any html tags that may have been present in input to avoid script injection
  $input = htmlspecialchars($input);
  // Makes sure string is not empty or null.
  if ($input != '' && $input != null) {
    return $input;
  }
  else {
    return "Error";
  }

}

?>
