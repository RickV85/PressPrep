import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <NavLink to={"/"} className="home-link">
        <h1>PrepPress</h1>
      </NavLink>
      <hr className="nav-divider" />
    </nav>
  );
}
