    <?php

      if ($_SERVER['REQUEST_METHOD'] == 'POST')
      {

        header("content-type: application/json");
        require 'validation.php';

        $values = array();

        foreach($_POST as $key => $value)
        {
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

        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
          require 'database.php';

          $dbInsertion = insertIntoDatabase($values);

          if ($dbInsertion == false)
          {
            echo json_encode("Failure!");
            exit();
          }

          $email_header = $first_name . " " . $last_name . " has submitted a contact form message on the NICU Moms of Louisiana website!";
          $destination_email = "nicumomsofla@gmail.com";
          $email_body = "Name: " . $first_name . " " . $last_name .
                        "\nEmail: " . $email .
                        "\nSubject: " . $subject .
                        "\n\nMessage:\n\n" . "     " . $message;

          if ( mail ($destination_email, $email_header, $email_body) )
          {
            echo json_encode("Success!");
            exit();
          }

          else
          {
            echo json_encode("Failure!");
            exit();
          }
        }

        else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          echo json_encode("Failure!");
          exit();
        }
      }



     ?>
