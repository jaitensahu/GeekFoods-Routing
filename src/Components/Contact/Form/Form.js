import React from "react";
import './Form.css'
const Form = () => {
  return (
    <div className="formm">
      <input type="text" placeholder="Your Name" />
      <input type="text" placeholder="Your Email" />
      <input type="text" placeholder="Your Phone" />
      <textarea
        name=""
        placeholder="Your Message"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button>Submit</button>
    </div>
  );
};

export default Form;
