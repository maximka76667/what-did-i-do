import React from "react";
import "./Footer.sass";

function Footer() {
  return (
    <footer className="footer">
      <p>
        ©
        {
        new Date().getFullYear()
        } Maxim Grivennyy
      </p>
    </footer>
  );
}

export default Footer;
