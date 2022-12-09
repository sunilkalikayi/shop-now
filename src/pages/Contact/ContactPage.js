import React from "react";
import Image1 from "../../assets/images/ContactPageImage1.png";
import "./ContactPage.css";
const ContactPage = () => {
  return (
    <div className="ContactPage">
      <div>
        <img className="Image" src={Image1}></img>
      </div>
      <div className="ContactPageMiddle">
        <div className="left">
          <h1>We Would love to hear from you</h1>
          <p style={{marginTop:"32px"}}>
            If you have any query or any type of suggestion, you can contact us
            here. We would love to hear from you.
          </p>
          <div className="Form" style={{marginTop:"76px"}}>
            <div className="part1">
              <input  className="inp1" type="text" placeholder="Name"></input>
              <input className="inp1" type="text" placeholder="Email"></input>
            </div>
            <input  className="msg"  type="text" placeholder="Message"></input>
            <button className="btn" >SEND MESSAGE</button>
          </div>
        </div>
        <div className="right">
          <h2>Visit Us</h2>
          <p style={{marginTop:"16px"}}>UET Lahore, Punjab, Pakistan  <br></br> Phone: +923039898987</p>
          <h2 style={{marginTop:"48px"}}>Get In Touch</h2>
          <p style={{marginTop:"16px"}}>
            You can get in touch with us on this provided email. <br></br>Email:
            hmjawad087@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
