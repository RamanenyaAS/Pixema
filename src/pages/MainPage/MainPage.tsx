import "./MainPage.css"
import IconHome from "../../images/IconHome.svg"
import IconSetting from "../../images/IconSetting.svg"
import IconTrends from "../../images/IconTrends.svg"
import IconFavorites from "../../images/IconFavoritesLight.svg"
import IconLogo from "../../images/Logo.svg"
import Link from "../../components/Link/Link"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchMovies } from "../../slice/pixemaSlice"
import Card from "../../components/Card/Card"
import Spinner from "../../components/Spinner/Spinner"
import { IInitialState, IMovie } from "../../types/interfaces"
import Search from "../../components/Search/Search"
import User from "../../components/User/User"

function MainPage() {

  const dispatch = useDispatch<any>();
  const [page, setPage] = useState<number>(1);

  const films = useSelector((state: IInitialState) => state.movies);
  console.log(films);
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
      <div className="container">
        <aside className="aside">
          <img className="logo" src={IconLogo} alt="Pixema logo" />
          <Link title="Home" src={IconHome} isDisabled={false}></Link>
          <Link title="Trends" src={IconTrends} isDisabled={false}></Link>
          <Link title="Favorites" src={IconFavorites} isDisabled={false}></Link>
          <Link title="Setting" src={IconSetting} isDisabled={false}></Link>
          <footer>
            <div className="copyright">© All Rights Reserved</div>
          </footer>
        </aside>
        <div className="main-page-block">
          <header className="header">
            <div className="header-block">
              <Search isDisabled={false}></Search>
              <User username="Artem Lapitsky"></User>
            </div>
          </header>
          {status === "pending" ?
            <>
              <div className="spinner">
                <Spinner></Spinner>
              </div>
            </> : null}
          {status === "fulfilled" ?
            <>
              <div className="movie-block">
                {films.map((movie: IMovie) => (
                  // key наверное стоит исправить, думаю он как то не так работает
                  <Card key={movie.imdbID} movie={movie} ></Card>
                ))}
              </div>
            </> : null}
        </div>
      </div>
    </>
  );
}

export default MainPage;