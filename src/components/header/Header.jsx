import BrandIcon from "../brand-icon/BrandIcon";
import ContactUs from "../contact-us/ContactUs";
import { HeaderLinks } from "../header-links/HeaderLinks";
import "./styles.css";

export function Header({ menuOptions }) {
  return (
    <div className="container">
      <div className="top-bar"></div>
      <nav className="nav-bar">
        <BrandIcon />
        <HeaderLinks options={menuOptions} />
        <ContactUs />
      </nav>
    </div>
  );
}
