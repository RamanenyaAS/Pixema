import "./Card.css"
import { Link } from "react-router-dom"
import { IMovie } from "../../types/interfaces";
import { useContext } from "react";
import { ThemeContext } from "../../providers/myContext";

function Card({ movie }: { movie: IMovie }) {
  const [topic]= useContext(ThemeContext);

  return (
    <>
      <div className="card">
        <Link className="link" key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
          <div className="card__rating">{Math.floor(Math. random()*10) + "." + Math.floor(Math. random()*10)}</div>
          <img className="card__image" src={movie.Poster} alt="" />
          <div className={`card__title card__title_${topic}`}>{movie.Title}</div>
          <div className="card__genre">Adventure Action</div>
        </Link>
      </div>
    </>
  );
}

export default Card;