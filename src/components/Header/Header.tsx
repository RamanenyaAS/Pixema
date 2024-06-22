import "./Header.css"
import Search from "../Search/Search";
import User from "../User/User";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconLogo from "../../images/Logo.svg"
import Burger from "../Burger/Burger";


function Header() {

  const [isAuthorized, setIsAuthorized] = useState(true);
  const [username, setUsername] = useState("Artem Lapitsky");

  const handleLogOut = () => {
    setIsAuthorized(false);
    setUsername("");
  };

  const handleSignIn = () => {
    setIsAuthorized(true);
    setUsername("Artem Lapitsky");
  };

  return (
    <>
      <header className="header">
        <div className="header-block">
          <Link to={"/"} className="link">
            <img className="logo" src={IconLogo} alt="Pixema logo" />
          </Link>
          <Search isDisabled={false}></Search>
          {isAuthorized ? <User username={username} onLogOut={handleLogOut}></User> : <User username="Sign in" onSignIn={handleSignIn}></User>}
          <Burger></Burger>
        </div>
      </header>

      <header className="header-mobile">
        <div className="header-top-mobile">
          <Link to={"/"} className="link">
            <img className="logo" src={IconLogo} alt="Pixema logo" />
          </Link>
          <Burger></Burger>
        </div>
        <Search isDisabled={false}></Search>
      </header>
    </>
  );
}

export default Header;