import React from "react";

function Footer() {

  const dateYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="main-footer__wrapper">
        <div className="main-footer__copyright">
          <p>Copyright © {dateYear}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
