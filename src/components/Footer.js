import React from 'react';
import twitter from '../images/twitter48.png';
import facebook from '../images/facebook48.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <a href="http://sautiafrica.org/company-info/" target="blank">Company Info&nbsp;&nbsp;</a>
        <p>&nbsp;|&nbsp;&nbsp;Ⓒ 2019&nbsp;&nbsp;</p>
        <p className="red-text">Sauti Africa Limited.&nbsp;&nbsp;</p>
        <p>All rights reserved.</p>
      </div>
      <div className="footer-social-media">
        <img src={twitter} alt="twitter logo" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={facebook} alt="twitter logo" />
      </div>
    </div>
  )
}

export default Footer;
