import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState, IMovie } from "../../types/interfaces";
import { searchResult } from "../../slice/pixemaSlice";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";

function SearchPage() {

  const dispatch = useDispatch<any>();
  const [page, setPage] = useState<number>(1);
  const data: any = useSelector((state: IInitialState) => state.searchResultMovies);
  const status = useSelector((state: IInitialState) => state.status)
  console.log(data.Search)

  return (
    <>
      {status === "pending" ? <Spinner></Spinner> : null}
      {data == null ? <h1>Введите запрос</h1> : null}
      {data.totalResults === "False" ? <h1>Too many results</h1> : null}
      {(data !== null && data.totalResults !== undefined && Number(data.totalResults) === 0 ? <h1>not found</h1> : null)}
      {status === "fulfilled" && data !== null && Array.isArray(data.Search) ?
        <>
          <div className="movie-block">
            {data.Search.map((movie: IMovie) => (
              <Card key={movie.imdbID} movie={movie} ></Card>
            ))}
          </div>
        </> : null}
    </>);
}

export default SearchPage;