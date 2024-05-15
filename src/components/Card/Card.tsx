import "./Card.css"
import tempImage from "../../images/tempImage.svg"

function Card({text}: {text:string}) {
  return (
    <>
      <div className="card">
        <div className="card__rating">7.6</div>
        {/* <img className="card__image" src={tempImage} alt="" /> */}
        <div className="card__title">Wonder Woman: 1984</div>
        <div className="card__genre">Adventure Action</div>
      </div>
    </>
   );
}

export default Card;