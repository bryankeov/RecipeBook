import Logo from "../images/Logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src={Logo}
        alt="Logo by Jason Aldean from vhv.rs"
        height={50}
      />
      <h1>Recipe Book</h1>
      <div className="nav-container">
        <button type="button" className="home-btn">
          Home
        </button>
        <button type="button" className="new-recipe-btn">
          Add New Recipe
        </button>
      </div>
    </div>
  );
}
