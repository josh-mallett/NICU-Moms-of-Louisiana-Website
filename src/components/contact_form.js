import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { post } from 'axios';

class ContactForm extends Component {

  constructor(props) {
    super(props);

    // State holds the message that will display after the form is submitted.
    // (Success or Failure)

    this.state =
    {
      submit_message: '',
      submit_message_color: ''
    }
  }

  // Function that renders all input fields that are present in the form.

  renderInput(field) {

    // Returns an input with proper placeholders.
    // Input calls validation method once user enters and leaves the input, and
    // displays appropriate error message if something is wrong.

    // ...field.input is an object that contains predefined event handlers
    return (
      <div>
        <input
          type="text"
          placeholder={field.placeholder}
          {...field.input}
        />
        <span className={field.cssClass}>{field.meta.touched ? field.meta.error : ''}</span>
      </div>
    )

  }

  // Function that renders all textarea fields that are present in the form.

  renderTextArea(field) {

    // Returns an textarea with proper placeholders.

    // Input calls validation method once user enters and leaves the input, and
    // displays appropriate error message if something is wrong.

    return (
      <div>
        <textarea
          placeholder={field.placeholder}
          {...field.input}
        />
        <span className={field.cssClass}>{field.meta.touched ? field.meta.error : ''}</span>
      </div>
    )

  }

  // Function that takes in response sent from server and updates the page to let the user know
  // if their form was accepted and sent successfully.

  renderSubmitMessage(response) {
    if (response == 'Success!') {
      this.setState
        ({
          submit_message: 'Form submitted successfully!',
          submit_message_color: 'rgb(10, 255, 104)'
        });
    }

    else if (response == 'Failure!') {
      this.setState
        ({
          submit_message: 'Something went wrong, please check your input and try again.',
          submit_message_color: 'red'
        });
    }
  }

  // Function that handles sending the form data to the backend once the user submits
  // the form.

  onSubmit(values) {

    // Formdata object stores the values entered by the user in a better form to be sent
    // to the server.

    let formData = new FormData();

    // Declare content type and url of PHP file.
    const config = { headers: { 'content-type': 'application/json' } }
    const url = 'https://josh-mallett.com/php/index.php';
    // Weird requirement to work inside of the post function.
    var self = this;

    // Insert all form data into Formdata object.
    formData.append('first_name', values.first_name);
    formData.append('last_name', values.last_name);
    formData.append('email', values.email);
    formData.append('subject', values.subject);
    formData.append('message', values.message);

    // Axios post function: sends data to server and recieves response via AJAX.
    // POST to server.
    post(url, formData, config)
        // Then recieve response
        .then(function(response) {
          // Output success or failure message to console.
          console.log(response.data);
          // Calls renderSubmitMessage function using self as a reference to the
          // whole ContactForm Component itself, rather than just this post function.
          self.renderSubmitMessage(response.data.toString());
        })
        .catch(function(error) {
          // Catch any thrown error and console log it.
          console.log(error);
        });

  }

  render() {
    const { handleSubmit } = this.props;
    var style = {
      color: this.state.submit_message_color,
      'font-family': "Lato"
    }

    return (
      <div className="contact_form">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form_content">
            <li id="fn">
              <Field
                name="first_name"
                component={this.renderInput}
                placeholder="First Name"
                cssClass="first_name"
              />
            </li>

            <li id="ln">
              <Field
                name="last_name"
                component={this.renderInput}
                placeholder="Last Name"
                cssClass="last_name"
              />
            </li>

            <li>
              <Field
                name="email"
                component={this.renderInput}
                placeholder="someone@example.com"
                cssClass="email"
              />
            </li>

            <li>
              <Field
                name="subject"
                component={this.renderInput}
                placeholder="Subject"
                cssClass="subject"
              />
            </li>

            <li>
              <Field
                name="message"
                component={this.renderTextArea}
                placeholder="My message is..."
                cssClass="message"
              />
            </li>

            <li>
              <input
                className="button_submit"
                type="submit"
                value="SUBMIT">
              </input>
              <div className="submit_message" style={style}> {this.state.submit_message}</div>
            </li>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.first_name) {
    errors.first_name = "Please enter your first name.";
  }

  if (!values.last_name) {
    errors.last_name = "Please enter your last name.";
  }

  if (!values.email || !emailRegex.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject) {
    errors.subject = "Please enter a message subject.";
  }

  if (!values.last_name) {
    errors.last_name = "Please enter your last name.";
  }

  if (!values.message) {
    errors.message = "Please enter a message.";
  }

  return errors;
}


const afterSubmit = (result, dispatch) => {
    dispatch(reset('contact'));
}

// Glue code
export default reduxForm({
  validate,
  form: 'contact',
  onSubmitSuccess: afterSubmit
})(ContactForm);
