import "./ButtonGroup.css"
import IconFavorites from "../../images/IconFavorites.svg"
import IconShare from "../../images/IconShare.svg"


function ButtonGroup() {
  return (
    <>
      <div className="button-group-block">
        <div className="left-button">
          <img className="button-group__image" src={IconFavorites} alt="Favorites" />
        </div>
        <div className="right-button">
          <img className="button-group__image" src={IconShare} alt="Share" />
        </div>
      </div>
    </>
  );
}

export default ButtonGroup;