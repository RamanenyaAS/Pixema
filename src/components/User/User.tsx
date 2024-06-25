import "./User.css"
import ArrowDown from "../../images/IconArrowDown.svg"
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../providers/myContext";

function User({ username, onLogOut, onSignIn }: { username: string, onLogOut?: () => void, onSignIn?: () => void }) {

  const [isOpen, setIsOpen] = useState(false);
  const [topic] = useContext(ThemeContext);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleLogOut = () => {
    if (onLogOut) {
      onLogOut();
    }
    setIsOpen(false);
  };

  const handleSignIn = () => {
    if (onSignIn) {
      onSignIn();
    }
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  let initial = username.split(" ").reduce(((res, item) => res + item[0]), "").toLocaleUpperCase();

  return (
    <>
      <div className="user-block" onClick={toggleDropdown}>
        <div className="user-block__initial">{initial}</div>
        <div className={`user-block__name user-block__name_${topic}`}>{username}</div>
        <img className="user-block__image" src={ArrowDown} alt="Arrow Down" />
        {isOpen &&
          <div ref={dropdownRef} className="drop-down-list">
            <div className="drop-down-block">
              <div className="drop-down-block__text">Edit profile</div>
            </div>
            <div className="drop-down-block">
              {onLogOut ?
                <Link to={"/signIn"} className="link">
                  <div className="drop-down-block__item" onClick={handleLogOut}>Log Out</div>
                </Link> :
                <div className="drop-down-block__item" onClick={handleSignIn}>Sign In</div>
              }
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default User;