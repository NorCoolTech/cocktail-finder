
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {


  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">Cocktail Finder</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink
            to="/newsletter"
            className={({ isActive, isPending }) =>
              `nav-link ${isPending ? "pending" : isActive ? "active" : ""}`
            }
          >
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
