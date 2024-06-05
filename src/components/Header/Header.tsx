import "./Header.css"
import Search from "../Search/Search";
import User from "../User/User";
import { useState } from "react";

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
            <Search isDisabled={false}></Search>
            {isAuthorized ? <User username={username} onLogOut={handleLogOut}></User> : <User username="Sign in" onSignIn={handleSignIn}></User>}
          </div>
        </header>
    </>
  );
}

export default Header;