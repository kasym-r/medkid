import React from "react";

///styles
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <div className="logo">
          <img src="https://i.ibb.co/4KtXYDB/logomed.png" />
        </div>
        <div className="Footer_right">
          <span>Контакты</span>
          <div className="Footer_right_info">
            <ul>
              <li>USA, New York city</li>
              <li>97 West Cemetery St. Bay Shore, NY 11706</li>
              <li>Phone number: +18143008848</li>
              <li>e-mail: FSCW@Ginbox.bz</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Footer_bottom">
        <span>© 2019 OBF "Help the Children - F.S.C.W.". All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
