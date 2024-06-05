import "./SearchPage.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState, IMovie } from "../../types/interfaces";
import { searchResult } from "../../slice/pixemaSlice";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";

function SearchPage() {
  const dispatch = useDispatch()<any>;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const data: any = useSelector((state: IInitialState) => state.searchResultMovies);
  const status = useSelector((state: IInitialState) => state.status);

  const handleSearch = () => {
    if (searchTerm) {
      dispatch(searchResult({ text: searchTerm, page }));
    }
  };

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchResult({ text: searchTerm, page }));
    }
  }, [dispatch, searchTerm, page]);

  return (
    <>
      {status === "pending" && <Spinner />}
      {!data &&
        <div className="error-box">
          <h1 className="error-box__text">Введите запрос</h1>
        </div>
      }
      {data && data.Response === "False" && data.Error === "Too many results." &&
        <div className="error-box">

          <h1 className="error-box__text">Слишком много результатов, введите более конкретный запрос</h1>
        </div>
      }
      {data && data.Response === "False" && data.Error === "Movie not found!" &&
        <div className="error-box">
          <h1 className="error-box__text">Фильм не найден</h1>
        </div>
      }
      {status === "fulfilled" && data && data.Search && (
        <div className="movie-block">
          {data.Search.map((movie: IMovie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
}

export default SearchPage;
