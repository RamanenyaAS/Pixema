import "./FavoritesPage.css"
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { IInitialState, IMovie } from "../../types/interfaces";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function FavoritesPage() {

  const [movies, setMovies] = useState<IMovie[]>([]);
  const status = useSelector((state: IInitialState) => state.status)


  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  return (
    <>
      {status === "pending" ?
        <div className="movie-block">
          <Spinner></Spinner>
        </div> : null}
      {status === "fulfilled" ?
        <>
          <div className="movie-block">
            {movies.map((movie) => (
              <Card key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </> : null}
      {status === "fulfilled" && movies.length === 0 ?
        <>
          <div className="favorites-empty-block">
            <h1 className="favorites-empty-block__title">Favorites list is empty</h1>
            <div className="favorites-empty-block__subtitle">Select the movie you like and add it to your favorites</div>
            <Link to={"/"}>
              <Button text='Go Home' type='button-primary' isDisabled={false}></Button>
            </Link>
          </div>
        </> : null
      }
    </>
  );
}

export default FavoritesPage;