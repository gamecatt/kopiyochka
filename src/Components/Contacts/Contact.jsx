import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div className='Contact'>
        <div className="Design">
        </div>
        <div className="form">
          <div className="icons">
          <a className="insta"></a>
          <a className="telegram"></a>
          </div>
            <h1>Contact us</h1>
            <input placeholder='Your Name' type="text" name="Name" id="Name" />
            <input placeholder='E-Mail' type="email" name="Email" id="Email" />
            <input placeholder='Phone number' type="phone" name="Phone" id="Phone" />
            <input placeholder='Message' type="text" name="Message" id="Message" />
            <button type="submit">Send</button>
        </div>
    </div>
  )
}

export {Contact};