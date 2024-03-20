import React from 'react'
import './Footer.css'
import footerimg from '../Assets/logo_big.png'
import instaicon from '../Assets/instagram_icon.png'
import pintresticon from '../Assets/pintester_icon.png'
import whatsappicon from '../Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerimg} alt="" />
            <p>BlueOcean</p>
        </div>
        <ul className="footer-link">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
             <img src={instaicon} alt="" />
          </div>
          <div className="footer-icons-container">
             <img src={pintresticon} alt="" />
          </div><div className="footer-icons-container">
             <img src={whatsappicon} alt="" />
          </div>
          </div>
          <div className="footercopyright">
            <hr />
            <p>Copyright @Suyashh -AllRights Reserved</p>
          </div>
      
    </div>
  )
}

export default Footer
