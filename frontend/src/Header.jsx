import { Link } from "react-router-dom";
import MenuIcon from "./svgfile/Menu";
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
        {/* {'/auth/login' : '/auth'} */}
        <Link to={"/auth/login"} className="iconbar">
          <MenuIcon />
        </Link>
      </header>
    </>
  );
};

export default Header;
