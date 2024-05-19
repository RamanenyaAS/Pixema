import "./User.css"
import ArrowDown from "../../images/IconArrowDown.svg"
import { useState } from "react";

function User({ username }: { username: string }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }


  let initial = username.split(" ").reduce(((res, item) => res + item[0]), "").toLocaleUpperCase();

  return (
    <>
      <div className="user-block">
        <div className="user-block__initial">{initial}</div>
        <div className="user-block__name">{username}</div>
        <img className="user-block__image" src={ArrowDown} alt="Arrow Down" onClick={toggleDropdown} />
      
      {isOpen &&
        <div className="drop-down-list">
          <div className="drop-down-block">
            <div className="drop-down-block__text">Edit profile</div>
          </div>
          <div className="drop-down-block">
            <div className="drop-down-block__logOut">Log Out</div>
          </div>
        </div>
      }
</div>
    </>
  );
}

export default User;