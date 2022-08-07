import "./styles.css";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instas.svg";
import zap2 from "../../assets/icons/logos_whatsapp-icon.png";

export default function ContactUs() {
  return (
    <main className="contact-us-container">
      <p>+001 (001) 123 4567 </p>

      <div className="icons">
        <div className="zap2-container">
          <img src={zap2} alt="zap2"></img>
          <p>ZAP 2</p>
        </div>

        <div>
          <img src={instagramIcon} alt="instagram"></img>
        </div>

        <div>
          <img src={facebookIcon} alt="facebook"></img>
        </div>
      </div>
    </main>
  );
}
