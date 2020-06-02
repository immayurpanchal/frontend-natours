import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t: translation } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="/img/logo-green.png" alt="Natour logo" />
      </div>
      <ul className="footer__nav">
        <li>
          <Link to="/">{translation("footer.aboutus")}</Link>
        </li>
        <li>
          <Link to="/">{translation("footer.downloadApps")}</Link>
        </li>
        <li>
          <Link to="/">{translation("footer.becomeAGuide")}</Link>
        </li>
        <li>
          <Link to="/">{translation("footer.carrers")}</Link>
        </li>
        <li>
          <Link to="/">{translation("footer.contact")}</Link>
        </li>
      </ul>
      <p className="footer__copyright">© 2020 by BeStupid</p>
    </footer>
  );
};

export default Footer;
