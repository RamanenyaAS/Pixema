import "./User.css"
import ArrowDown from "../../images/IconArrowDown.svg"
import { useState } from "react";
import { Link } from "react-router-dom";

function User({ username, onLogOut, onSignIn }: { username: string, onLogOut?: () => void, onSignIn?: () => void }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleLogOut = () => {
    if (onLogOut) {
      onLogOut();
    }
    setIsOpen(false); // Закрыть выпадающий список после выхода
  };


  const handleSignIn = () => {
    if (onSignIn) {
      onSignIn();
    }
    setIsOpen(false);
  };

  let initial = username.split(" ").reduce(((res, item) => res + item[0]), "").toLocaleUpperCase();

  return (
    <>
      <div className="user-block" onClick={toggleDropdown}>
        <div className="user-block__initial">{initial}</div>
        <div className="user-block__name">{username}</div>
        <img className="user-block__image" src={ArrowDown} alt="Arrow Down" />

        {isOpen &&
          <div className="drop-down-list">
            <div className="drop-down-block">
              <div className="drop-down-block__text">Edit profile</div>
            </div>
            <div className="drop-down-block">
              {onLogOut ?
                <Link to={"/signIn"} className="link">
                  <div className="drop-down-block__logOut" onClick={handleLogOut}>Log Out</div>
                </Link> :
                <div className="drop-down-block__logOut" onClick={handleSignIn}>Sign In</div>
              }
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default User;