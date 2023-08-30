import React from "react";
import IndexPage from "./pages/IndexPage";
import loginPage from "./pages/LoginPage";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <Link to={"/"} className="LOGO">
          LOGO
        </Link>
        <div className="frontbar">
          <h2>FRONTLINER</h2>
          <h2>FRONTLINER SEC</h2>
        </div>
        <Link to={"/login"} className="iconbar">
          icon bar
        </Link>
      </header>
    </>
  );
};

export default Header;
