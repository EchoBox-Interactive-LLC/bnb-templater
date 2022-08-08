import React from "react";
import "./footer.css";

function Footer() {

  // let footer = document.getElementsByClassName('footer');
  // footer.classList.add('sticky-footer');

  return (
    <footer className="sticky-footer">
      <div className="footer-flex">
        <h4 className="footer-flex-left footer-item">© 2022 Urbnb, Inc.</h4>
        <div className="footer-flex-right">
          <h4 id="language">English(US)</h4>
          <h4 className="footer-item">$  USD</h4>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
