import "./Header.css"
import Search from "../Search/Search";
import User from "../User/User";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import IconLogo from "../../images/Logo.svg"
import IconLogoLight from "../../images/LogoLight.svg"
import Burger from "../Burger/Burger";
import { ThemeContext } from "../../providers/myContext";


function Header() {

  const [isAuthorized, setIsAuthorized] = useState(true);
  const [topic] = useContext(ThemeContext);
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
      <header className="header" data-testid="cypress-header">
        <div className="header-block">
          <Link to={"/"} className="link">
            {topic === "dark" ?
              <img className="logo" src={IconLogo} alt="Pixema logo" />
              :
              <img className="logo" src={IconLogoLight} alt="Pixema logo" />
            }
          </Link>
          <Search isDisabled={false}></Search>
          {isAuthorized ? <User username={username} onLogOut={handleLogOut}></User> : <User username="Sign in" onSignIn={handleSignIn}></User>}
          <Burger></Burger>
        </div>
      </header>

      <header className="header-mobile" data-testid="cypress-header">
        <div className="header-top-mobile">
          <Link to={"/"} className="link">
            {topic === "dark" ?
              <img className="logo" src={IconLogo} alt="Pixema logo" />
              :
              <img className="logo" src={IconLogoLight} alt="Pixema logo" />
            }
          </Link>
          <Burger></Burger>
        </div>
        <Search isDisabled={false}></Search>
      </header>
    </>
  );
}

export default Header;