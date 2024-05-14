import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/images/places/logo.png";
import "./header.css";
import { TiThMenu } from "react-icons/ti";
import { useContext, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvider";
import defaultProfile from "../../../src/assets/images/places/defaultProfile.png";
const Header = () => {
  const { user, logout, loading } = useContext(AuthContext);

  console.log("at haeder", user);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleMenuIcon = () => {
    setShowNavbar(!showNavbar);
  };
  const handleCloseIcon = () => {
    setShowNavbar(!showNavbar);
  };
  const handleLogout = () => {
    logout()
      .then(() => {
        handleCloseIcon();
      })
      .catch();
  };
  const menuItems = (
    <>
      <li onClick={handleCloseIcon}>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li onClick={handleCloseIcon}>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li onClick={handleCloseIcon}>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li onClick={handleCloseIcon}>
        <NavLink to={"/cart"}>Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className="header-container-outer">
      <div className="header-container">
        <div className="logo-container">
          <Link to={"/"}>
            <img className="logo" src={logo} alt="" />
          </Link>

          {user && (
            <div className="profile-pic-container">
              {user.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <img src={defaultProfile}></img>
              )}
            </div>
          )}

          {user && <p>{user.displayName}</p>}
        </div>
        <div className={`navbar ${showNavbar ? "show-navbar" : ""}`}>
          <AiFillCloseCircle onClick={handleCloseIcon} className="close-icon" />
          <ul className="menu-mbl-device">{menuItems}</ul>
          <ul className="menu">{menuItems}</ul>
          {user ? (
            <Link onClick={handleLogout} to={"/login"} className="button">
              Logout
            </Link>
          ) : (
            <Link onClick={handleCloseIcon} to={"/login"} className="button">
              Login
            </Link>
          )}
        </div>
        <TiThMenu onClick={handleMenuIcon} className="menu-icon" />
      </div>
    </div>
  );
};

export default Header;
