import "./Header.css"
import Search from "../Search/Search";
import User from "../User/User";

function Header() {
  return (
    <>
        <header className="header">
          <div className="header-block">
            <Search isDisabled={false}></Search>
            <User username="Artem Lapitsky"></User>
          </div>
        </header>
    </>
  );
}

export default Header;