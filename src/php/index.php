    <?php

      if ($_SERVER['REQUEST_METHOD'] == 'POST')
      {

        // Declare JSON content type
        header("content-type: application/json");
        require 'validation.php';
        // Initialize array to store incoming data
        $values = array();

        // For each incoming piece of data that comes with the POST request
        // in the form of variable = value
        foreach($_POST as $key => $value)
        {
          // Call validation method from validation.php
          // If the value is valid, then assign a variable to it and store it in
          // the values array.
          if (test_input($value) != "Error")
          {
            $$key = test_input($value);
            $values[] = $value;
          }
          else
          {
            echo json_encode("Failure!");
            exit();
          }
        }

        // Applies email validation filter to the variable that contains the email address.
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

          require 'database.php';

          // Call to function from database.php file to insert array of valuesinto the MySQL Database.
          $dbInsertion = insertIntoDatabase($values);

          // Format strings from the form data to send to nicumoms email.
          $email_header = $first_name . " " . $last_name . " has submitted a contact form message on the NICU Moms of Louisiana website!";
          $destination_email = "nicumomsofla@gmail.com";
          $email_body = "Name: " . $first_name . " " . $last_name .
                        "\nEmail: " . $email .
                        "\nSubject: " . $subject .
                        "\n\nMessage:\n\n" . "     " . $message;

          // If mail is sent successfully, return success message.
          if ( mail ($destination_email, $email_header, $email_body) )
          {
            echo json_encode("Success!");
            exit();
          }
          // Else return Failure message.
          else
          {
            echo json_encode("Failure!");
            exit();
          }
        }
        
        // If email is not valid then return Failure message.
        else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          echo json_encode("Failure!");
          exit();
        }
      }

    ?>

