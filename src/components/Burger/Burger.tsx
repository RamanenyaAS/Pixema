import "./Burger.css"
import IconBurger from "../../images/Burger.svg"
import IconHome from "../../images/IconHome.svg"
import IconTrends from "../../images/IconTrends.svg"
import IconFavorites from "../../images/IconFavorites.svg"
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Links from "../Links/Links";
import { ThemeContext } from "../../providers/myContext"
import Switch from "../Switch/Switch"

function Burger() {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [topic, setTopic] = useContext(ThemeContext);

  const toggleTopic = () => {
    setTopic(topic === "light" ? "dark" : "light");
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleSwitchClick = (event: React.MouseEvent) => {
    event.stopPropagation();
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
          <div ref={dropdownRef} onClick={toggleDropdown} className="burger-drop-down">
            <div className="drop-down-block">
              <div className="drop-down-block__text">Edit profile</div>
            </div>
            <div className="drop-down-block">
              <Link to={"/"} className="link drop-down-block__text" >
                <Links title="Home" Icon={IconHome} isDisabled={false}></Links>
              </Link>
              <Links title="Trends" Icon={IconTrends} isDisabled={false}></Links>
              <div className="drop-down-block">
                <Link to={"/favorites"} className="link drop-down-block__text" >
                  <Links title="Favorites" Icon={IconFavorites} isDisabled={false}></Links>
                </Link>
              </div>
              <div className="drop-down-block">
                <div className="theme-block" onClick={handleSwitchClick} >
                  <FaMoon className={`theme-block__icon ${topic}`} />
                  <Switch onChange={toggleTopic} isDisabled={false} />
                  <IoSunny className={`theme-block__icon ${topic}`} />
                </div>
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