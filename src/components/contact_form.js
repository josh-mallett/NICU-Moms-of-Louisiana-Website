import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { post } from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state =
    {
      submit_message: '',
      submit_message_color: ''
    }
  }



  renderInput(field) {
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

  renderTextArea(field) {
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

  renderSubmitMessage(response) {
    if (response == 'Success!') {
      this.setState
        ({
          submit_message: 'Form submitted successfully!', submit_message_color: 'rgb(10, 255, 104)'
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

  onSubmit(values) {
    console.log(values.first_name);

    let formData = new FormData();

    formData.append('first_name', values.first_name);
    formData.append('last_name', values.last_name);
    formData.append('email', values.email);
    formData.append('subject', values.subject);
    formData.append('message', values.message);

    const config = {
            headers: { 'content-type': 'application/json' }
        }
    const url = 'https://nicumomsla.com/php/index.php';

    var self = this;

    post(url, formData, config)
        .then(function(response) {
          console.log(response.data);
          self.renderSubmitMessage(response.data.toString());
        })
        .catch(function(error) {
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
    return (
      <div className="success_message">
        <span>Message sent!</span>
      </div>
    );
}


export default reduxForm({
  validate,
  form: 'contact',
  onSubmitSuccess: afterSubmit
})(ContactForm);
