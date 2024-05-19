import "./Card.css"
import tempImage from "../../images/tempImage.svg"

function Card({title, poster}: {title:string, poster: string}) {
  return (
    <>
      <div className="card">
        <div className="card__rating">7.6</div>
        <img className="card__image" src={poster} alt="" />
        <div className="card__title">{title}</div>
        <div className="card__genre">Adventure Action</div>
      </div>
    </>
   );
}

export default Card;