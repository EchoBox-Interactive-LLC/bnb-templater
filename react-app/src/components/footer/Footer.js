import React from "react";
import LinkedIn from "../../images/linkedIn.png";
import GitHub from "../../images/github.svg";
import "./footer.css";

function Footer() {
  // let footer = document.getElementsByClassName('footer');
  // footer.classList.add('sticky-footer');

  return (
    <footer className="sticky-footer">
      <div className="footer-flex">
        <h4 className="footer-flex-left footer-item">© 2022 Urbnb, Inc.</h4>
        <div className="about">
          <h2 id="created-by">Created By John Voskuyl</h2>
          <a href="https://github.com/jvos415">
            <img id="github" src={GitHub} alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/john-voskuyl-a2214083/">
            <img id="linkedin" src={LinkedIn} alt="LinkedIn Logo" />
          </a>
        </div>
        <div className="footer-flex-right">
          <p id="language">English(US)</p>
          <p className="footer-item" id="currency">$ USD</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
