import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div className='Contact'>
        <div className="Design">
        </div>
        <div className="form">
            <h1>Contact us</h1>
            <input type="text" name="Name" id="Name" />
            <input type="email" name="Email" id="Email" />
            <input type="phone" name="Phone" id="Phone" />
            <input type="text" name="Message" id="Message" />
            <button type="submit">Send</button>
        </div>
    </div>
  )
}

export {Contact};