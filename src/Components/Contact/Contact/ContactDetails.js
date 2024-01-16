import React from 'react'
import { FaHome } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { MdAttachEmail } from "react-icons/md";
import './ContactDetails.css'

const ContactDetails = () => {
  return (
    <div className='detailContainer'>
      <p>Contact Us</p>
      <h1>GET IN TOUCH WITH US</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
        tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim
        veniam quis nostrud exercitation ullamco
      </p>

      <div className="contactDetails">
        <div className="details">
          <FaHome />
          <div className="subDetails">
            <h2>Our Location</h2>
            <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
          </div>
        </div>
        <div className="details">
          <MdAttachEmail />
          <div className="subDetails">
            <h2>Email Address</h2>
            <p>info@yourdomain.com</p>
          </div>
        </div>
        <div className="details">
          <GiRotaryPhone />
          <div className="subDetails">
            <h2>Phone Number</h2>
            <p>(+62)81 414 257 9980</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
