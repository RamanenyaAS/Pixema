import Links from "../Links/Links";
import "./Aside.css"
import IconHome from "../../images/IconHome.svg"
import IconSetting from "../../images/IconSetting.svg"
import IconTrends from "../../images/IconTrends.svg"
import IconFavorites from "../../images/IconFavoritesLight.svg"
import { Link } from "react-router-dom";

function Aside() {
  return (
    <>
      <aside className="aside">
        <Link to={"/"} className="link">
          <Links title="Home" src={IconHome} isDisabled={false}></Links>
        </Link>
        <Links title="Trends" src={IconTrends} isDisabled={false}></Links>
        <Link to={"/favorites"} className="link">
          <Links title="Favorites" src={IconFavorites} isDisabled={false}></Links>
        </Link>
          <Links title="Setting" src={IconSetting} isDisabled={false}></Links>
          <footer>
            <div className="copyright">© All Rights Reserved</div>
          </footer>
      </aside>
    </>
  );
}

export default Aside;