import "./Card.css"
import tempImage from "../../images/tempImage.svg"
import { Link } from "react-router-dom"
import { IMovie } from "../../types/interfaces";

function Card({ movie }: { movie: IMovie }) {



  return (
    <>
      <div className="card">
        <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
          <div className="card__rating">7.6</div>
          <img className="card__image" src={movie.Poster} alt="" />
          <div className="card__title">{movie.Title}</div>
          <div className="card__genre">Adventure Action</div>
        </Link>
      </div>
    </>
  );
}

export default Card;