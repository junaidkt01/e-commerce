import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
     <div className="footer-div">
     <h1 className="footer-heading">LET'S STAY IN TOUCH</h1>
      <h3 className="footer-description">Get updates on sales special and more</h3>
      <input className="mail" placeholder="Enter your email"/>
      <button>Send</button>
     </div>
    </div>
  );
};

export default Footer;
