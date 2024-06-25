import Links from "../Links/Links";
import "./Aside.css"
import IconHome from "../../images/IconHome.svg"
import IconTrends from "../../images/IconTrends.svg"
import IconFavorites from "../../images/IconFavorites.svg"
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IInitialState } from "../../types/interfaces";
import Switch from "../Switch/Switch";
import { useContext } from "react";
import { ThemeContext } from "../../providers/myContext";

function Aside() {

  const status = useSelector((state: IInitialState) => state.status)
  const [topic, setTopic] = useContext(ThemeContext);


  const toggleTopic = () => {
    setTopic(topic === "light" ? "dark" : "light");
  }


  return (
    <>
      {status === "fulfilled" ?
        <aside className="aside">
          <Link to={"/"} className="link">
            <Links title="Home" Icon={IconHome}></Links>
          </Link>
          <Link to={"/"} className="link">
            <Links title="Trends" Icon={IconTrends}></Links>
          </Link>
          <Link to={"/favorites"} className="link">
            <Links title="Favorites" Icon={IconFavorites}></Links>
          </Link>
          <div className="theme-block">
            <FaMoon className={`theme-block__icon ${topic}`} />
            <Switch onChange={toggleTopic} isDisabled={false} />
            <IoSunny className={`theme-block__icon ${topic}`} />
          </div>
          <footer>
            <div className="copyright">© All Rights Reserved</div>
          </footer>
        </aside> : null}
    </>
  );
}

export default Aside;