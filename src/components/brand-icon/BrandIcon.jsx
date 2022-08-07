import "./styles.css";
import pastinhaIcon from "../../assets/icons/Pasttini.png";
import pizzaIcon from "../../assets/icons/pizza.png";

export default function BrandIcon() {
  return (
    <div className="brand-container">
      <img className="brand-text" src={pastinhaIcon} alt="brand icon" />
      <img className="brand-icon" src={pizzaIcon} alt="pizza icon" />
    </div>
  );
}
