import React, { useState, useRef } from 'react'
import './Contact.css'
import ReCAPTCHA from "react-google-recaptcha";
import { ImLocation2 } from 'react-icons/im';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import emailjs from '@emailjs/browser';



const Result = () =>{
  return(
    <p>Your message has been successfully sent.</p>
  )
}

const Contact = () => {

  const [varified, setVarified] = useState(false);

  const form = useRef();

  const [result, showResult] = useState(false);


  const handleCaptcha = (value) => {
    console.log("Captcha value:", value);
    setVarified(true);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_86ppnrd', 'template_r5vss9x', form.current, 'U6K7fN-7n9T8JBOXG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      showResult(true);
  };

  // hide result
  setTimeout(() =>{
    showResult(false);
  }, 5000);

  return (
    <div className='contact' id='contact'>
      <div className='contact-title'>
          <h1 className='contact-us'>Get in Touch</h1>
          <span className='para'>Feel free to drop us a line to contact us</span>
      </div>
      <div className='contact-body'>
          <div className='left'>
            <h1 className='con-head'>Feel Free To Contact</h1>
            <p className='con-description'>Hello Everyone! Have a great day :) I am here to help you. If you want to know something or you have an suggestion then please mail me. Thank You.</p>
            <div className='icons'><ImLocation2 className='sett-icon' /><span className='p_data'>Patur, Maharashtra</span></div>
            <div className='icons'><MdOutlineMarkEmailUnread className='sett-icon' /><span className='p_data'>mail4razique@gmail.com</span></div>
            <div className='icons'><ImWhatsapp className='sett-icon' /><span className='p_data'>+91 9823449818</span></div>
          </div>
          <div className='right'>
          <h1 className='forn-heading'>Contact Me</h1>
            <form onSubmit={sendEmail} ref={form}>
              
              <label htmlFor="name">Name*</label>
              <input type="text" id='name' name='name' required />
              
              <label htmlFor="email">Email*</label>
              <input type="email" id='email' name='email' required />
              
              <label htmlFor="message">Message*</label>
              <textarea type="text" id='message' name='message' required />
              <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" className='recaptcha' onChange={handleCaptcha} />
              <button className='send-btn' disabled={!varified}>Send</button>
              <div>
                { result ? <Result /> : null}
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact