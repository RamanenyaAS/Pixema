import "./MainPage.css"
import IconHome from "../../images/IconHome.svg"
import IconSetting from "../../images/IconSetting.svg"
import IconTrends from "../../images/IconTrends.svg"
import IconFavorites from "../../images/IconFavorites.svg"
import IconLogo from "../../images/Logo.svg"
import Link from "../../components/Link/Link"

function MainPage() {
  return (
    <>
      <div className="container">
        <aside className="aside">
          <img className="logo" src={IconLogo} alt="Pixema logo" />
          <Link title="Home" src={IconHome} isDisabled={false}></Link>
          <Link title="Trends" src={IconTrends} isDisabled={false}></Link>
          <Link title="Favorites" src={IconFavorites} isDisabled={false}></Link>
          <Link title="Setting" src={IconSetting} isDisabled={false}></Link>
          <footer>
            <div className="copyright">© All Rights Reserved</div>
          </footer>
        </aside>
        <div className="main-page-block">

        </div>

      </div>
    </>
  );
}

export default MainPage;