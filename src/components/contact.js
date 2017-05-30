import React, { Component } from 'react';
import ContactForm from './contact_form';

class Contact extends Component {
  render() {
    return(
      <div id="contact" className="contact">
        <div className="contact_title">
          <h1>CONTACT US</h1>
        </div>
        <ContactForm />
      </div>
    );
  }
}

export default Contact;
