import "./MainPage.css"
import { useDispatch, useSelector } from "react-redux"
import { useContext, useEffect, useState } from "react"
import { fetchMovies } from "../../slice/pixemaSlice"
import Card from "../../components/Card/Card"
import Spinner from "../../components/Spinner/Spinner"
import { IInitialState, IMovie } from "../../types/interfaces"
import { ThemeContext } from "../../providers/myContext"
import { AppDispatch } from "../../store/store"

function MainPage() {

  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(1);
  const [topic] = useContext(ThemeContext);
  const films = useSelector((state: IInitialState) => state.movies);
  const status = useSelector((state: IInitialState) => state.status)
  const [filmTitle] = useState<string>(() => {
    const moviesWords = [
      "movie",
      "man",
      "men",
      "hero",
      "love",
      "life",
      "way",
      "people",
      "time",
      "good",
      "great",
      "nice",
      "wonderful",
      "beautiful",
      "club",
      "city",
      "new",
      "die",
      "book",
      "gold",
      "money",
      "part",
      "sun",
      "game",
      "woman",
      "house",
      "boy",
      "fast",
      "witch",
      "night",
      "dark",
      "sea",
      "year",
      "wedding",
      "green",
      "race"
    ]
    return moviesWords[Math.floor(Math.random() * moviesWords.length)];
  });


  useEffect(() => {
    dispatch(fetchMovies({ filmTitle, page }));
  }, [page, dispatch, filmTitle]); 

  const fetchMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };


  return (
    <>
      {status === "pending" ?
        <>
          <div className="spinner">
            <Spinner></Spinner>
          </div>
        </> : null}
      {status === "fulfilled" ?
        <>
          <div className="movie-block">
            {films && films.map((movie: IMovie) => (
              <Card key={movie.imdbID} movie={movie} ></Card>
            ))}
            <div className="pagination-block">
              <div className="pagination-block__button" onClick={fetchMoreMovies}>Show More</div>
            </div>
          </div>
        </> : null}
    </>
  );
}

export default MainPage;