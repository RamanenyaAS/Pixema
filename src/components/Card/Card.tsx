import "./Card.css"
import { Link } from "react-router-dom"
import { IMovie } from "../../types/interfaces";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/myContext";



const movieKey = "a705d9d9";

async function fetchDetails(id: string): Promise<{ Genre: string, imdbRating: string }> {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${movieKey}&i=${id}`);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    return {
      Genre: data.Genre,
      imdbRating: data.imdbRating
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
}
function Card({ movie }: { movie: IMovie }) {
  const [topic] = useContext(ThemeContext);
  const [movieDetails, setMovieDetails] = useState<({ Genre: string, imdbRating: string } | null)>(null)
  useEffect(() => {
    fetchDetails(movie.imdbID)
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [movie.imdbID]);

  return (
    <>
      <div className="card">
        <Link className="link" key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
          {movieDetails && (
            <>
              <div className="card__rating">{movieDetails.imdbRating}</div>
              <img className="card__image" src={movie.Poster} alt="" />
              <div className={`card__title card__title_${topic}`}>{movie.Title}</div>
              <div className="card__genre">{movieDetails.Genre.replace(new RegExp(",", "g"), " • ")}</div>
            </>
          )}
        </Link>
      </div>
    </>
  );
}

export default Card;