import "./Burger.css"
import IconBurger from "../../images/Burger.svg"
import IconHome from "../../images/IconHome.svg"
import IconSetting from "../../images/IconSetting.svg"
import IconTrends from "../../images/IconTrends.svg"
import IconFavorites from "../../images/IconFavoritesLight.svg"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Links from "../Links/Links";

function Burger() {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

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

  return (
    <>
      <div className="burger">
        <img className="burger__image" onClick={toggleDropdown} src={IconBurger} alt="Burger Menu" />
        {isOpen &&
          <div ref={dropdownRef} className="burger-drop-down">
            <div className="drop-down-block">
              <div className="drop-down-block__text">Edit profile</div>
            </div>
            <div className="drop-down-block">
              <Link to={"/"} className="link drop-down-block__text">
                <Links title="Home" src={IconHome} isDisabled={false}></Links>
              </Link>
                <Links title="Trends" src={IconTrends} isDisabled={false}></Links>
              <div className="drop-down-block">
                <Link to={"/favorites"} className="link drop-down-block__text">
                  <Links title="Favorites" src={IconFavorites} isDisabled={false}></Links>
                </Link>
              </div>
              <div className="drop-down-block">
                {/* <Links title="Setting" src={IconSetting} isDisabled={false}></Links> */}
              </div>
              <div className="drop-down-block">
                <div className="drop-down-block__text">© All Rights Reserved</div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default Burger;