import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
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
      <h1>RECIPE BOOK</h1>
      <div className="nav">
        <ul>
          <li>
            <Link to="/" className="page-routing">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/AddRecipe" className="page-routing">
              ADD RECIPE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
