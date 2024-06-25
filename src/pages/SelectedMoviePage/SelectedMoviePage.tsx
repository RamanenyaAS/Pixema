import "./SelectedMoviePage.css"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { IInitialState, IMovie, ISelectedMovie } from "../../types/interfaces";
import { useContext, useEffect } from "react";
import { fetchMovies, fetchOneMovie } from "../../slice/pixemaSlice";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import Spinner from "../../components/Spinner/Spinner";
import Card from "../../components/Card/Card";
import { ThemeContext } from "../../providers/myContext";

function SelectedMoviePage() {

  const { movieId } = useParams<string>();
  const [topic] = useContext(ThemeContext);
  const dispatch = useDispatch()<any>;
  const selectedMovie: any = useSelector((state: IInitialState) => state.oneMovie);
  console.log(selectedMovie)
  const status = useSelector((state: IInitialState) => state.status);
  const films = useSelector((state: IInitialState) => state.movies);
  const page = 1;
  useEffect(() => {
    if (typeof movieId === "string") {
      dispatch(fetchOneMovie(movieId));
    }
  }, [movieId]);

  useEffect(() => {
    if (selectedMovie && selectedMovie.Title) {
      const filmTitle = selectedMovie.Title.slice(0, 5);
      dispatch(fetchMovies({ filmTitle, page }));
    }
  }, [dispatch, selectedMovie, page]);
  if (!selectedMovie) {
    <Link to={"/*"}></Link>
  }
  const recommendations = films && films.length > 0
    ? films.filter((movie: IMovie) => movie.imdbID !== selectedMovie.imdbID).slice(0, 4)
    : [];
  return (
    <>
      <div className="selected-container">
        {status === "pending" ?
          <>
            <div className="spinner">
              <Spinner></Spinner>
            </div>
          </> : null}
        {status === "fulfilled" ?
          <>
            <div className="poster-block">
              <img className="poster-block__image" src={selectedMovie.Poster} alt="Movie Poster" />
              <ButtonGroup movie={selectedMovie}></ButtonGroup>
            </div>
            <div className="selected-block">
              <div className="movie-genre">
                {selectedMovie.Genre && selectedMovie.Genre.replace(new RegExp(",", "g"), " • ")}
              </div>
              <div className={`movie-title movie-title_${topic}`}>{selectedMovie.Title}</div>
              <div className="rating-block">
                {selectedMovie.Ratings && selectedMovie.Ratings[1] && (
                  <div className="movie-rating">{selectedMovie.Ratings[0].Value.slice(0, 3)}</div>)}
                <div className="movie-rating">{`IMDb ${selectedMovie.imdbRating}`}</div>
                <div className="movie-duration">{selectedMovie.Runtime}</div>
              </div>
              <div className={`movie-plot movie-plot_${topic}`}>{selectedMovie.Plot}</div>
              <div className="info-block">
                <div className="info-left">
                  <div className="info-title">Year</div>
                  <div className="info-title">Released</div>
                  <div className="info-title">BoxOffice</div>
                  <div className="info-title">Country</div>
                  <div className="info-title">Production</div>
                  <div className="info-title">Actors</div>
                  <div className="info-title">Director</div>
                  <div className="info-title">Writers</div>
                </div>
                <div className="info-right">
                  <div className={`info-subtitle info-subtitle_${topic}`}>{selectedMovie.Year}</div>
                  <div className={`info-subtitle info-subtitle_${topic}`}>{selectedMovie.Released}</div>
                  <div className={`info-subtitle info-subtitle_${topic}`}>{selectedMovie.BoxOffice}</div>
                  <div className={`info-subtitle info-subtitle_${topic}`}>{selectedMovie.Country}</div>
                  <div className={`info-subtitle info-subtitle_${topic}`}>{selectedMovie.Production}</div>
                  <div className={`info-subtitle info-subtitle_${topic}`}>{selectedMovie.Actors}</div>
                  <div className={`info-subtitle info-subtitle_${topic}`}>{selectedMovie.Director}</div>
                  <div className={`info-subtitle info-subtitle_${topic}`}>{selectedMovie.Writer}</div>
                </div>
              </div>
              <div className="selected-block-recommendations">
                <div className={`recommendations__title recommendations__title_${topic}`}>Recommendations</div>
                <div className="recommendations-block">
                  {recommendations.map((movie: IMovie) => (
                    <Card key={movie.imdbID} movie={movie} ></Card>
                  ))}
                </div>
              </div>
            </div>
          </> : null}
      </div>
    </>
  );
}

export default SelectedMoviePage;