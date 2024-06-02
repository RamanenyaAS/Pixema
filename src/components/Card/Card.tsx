import "./Card.css"
import { Link } from "react-router-dom"
import { IMovie } from "../../types/interfaces";

function Card({ movie }: { movie: IMovie }) {



  return (
    <>
      <div className="card">
        <Link className="link" key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
          <div className="card__rating">{Math.floor(Math. random()*10) + "." + Math.floor(Math. random()*10)}</div>
          {/* изменить потом 7.6 на динамические данные */}
          <img className="card__image" src={movie.Poster} alt="" />
          <div className="card__title">{movie.Title}</div>
          <div className="card__genre">Adventure Action</div>
        </Link>
      </div>
    </>
  );
}

export default Card;