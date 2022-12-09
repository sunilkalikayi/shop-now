import React from 'react'
import "./Footer.css"
import Copyright from '../../assets/icons/copyright.png'
import visa from '../../assets/icons/visa.png'
import mastercard from '../../assets/icons/matercard.png'
import paypal from '../../assets/icons/paypal.png'
import visaelectron from '../../assets/icons/visaelectron.png'
import privacy from '../../assets/icons/privacy.png'
import line from '../../assets/images/line.png'
export default function Footer() {
  return (
    <div className="MainFooter">
    <div className="Footer">
        <div>
          <ul>
            <li>COMPANY INFO</li>
            <li>About Us</li>
            <li>Latest Posts</li>
            <li>Contact Us</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>HELP LINKS</li>
            <li>Returns</li>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Shipping Info</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>USEFUL LINKS</li>
            <li>Special Offers</li>
            <li>Gift Cards</li>
            <li>Advetising</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>GET IN THE KNOW</li>
            <input className="inputTagInFooter" type="text" placeholder="Enter email"></input>
          </ul>
        </div>
    </div>
    <div className="EndofFooter">
       <div className="EndofFooterLeft">
           <img style={{marginBottom:"10px"}} src={Copyright}></img> 
           <img src={privacy}></img>
       </div>
       <div className="EndFooterRight">
          <img src={visa}></img>
          <img src={mastercard} />
           <img  src={paypal}></img>
           <img src={visaelectron}></img>
       </div>
    </div>
    </div>
  )
}
