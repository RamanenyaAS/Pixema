import "./MainPage.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchMovies } from "../../slice/pixemaSlice"
import Card from "../../components/Card/Card"
import Spinner from "../../components/Spinner/Spinner"
import { IInitialState, IMovie } from "../../types/interfaces"

function MainPage() {

  const dispatch = useDispatch<any>();
  const [page, setPage] = useState<number>(1);

  const films = useSelector((state: IInitialState) => state.movies);
  const status = useSelector((state: IInitialState) => state.status)

  const moviesWords = [
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

  const filmTitle = moviesWords[Math.floor(Math.random() * moviesWords.length)]

  useEffect(() => {
    dispatch(fetchMovies({ filmTitle, page }))
  }, [page]);



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
          </div>
        </> : null}
    </>
  );
}

export default MainPage;