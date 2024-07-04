import "./SearchPage.css"
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState, IMovie, ISearchResultPosts } from "../../types/interfaces";
import { searchResult } from "../../slice/pixemaSlice";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import { ThemeContext } from "../../providers/myContext";
import { AppDispatch } from "../../store/store";

function SearchPage() {
  const dispatch = useDispatch()<any>;
  const searchTerm = useSelector((state: IInitialState) => state.searchTerm); // получаем searchTerm из хранилища
  const [page, setPage] = useState<number>(1);
  const data: any = useSelector((state: IInitialState) => state.searchResultMovies);
  const status = useSelector((state: IInitialState) => state.status);
  const [topic] = useContext(ThemeContext);

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchResult({ text: searchTerm, page }));
    }
  }, [dispatch, searchTerm, page]);

  const fetchMoreMovies = () => {
    setPage(prevPage => prevPage + 1)
  }


  return (
    <>
      {status === "pending" && <Spinner />}
      {!data &&
        <div className="error-box">
          <h1 className={`error-box__text_${topic}`}>Enter your request</h1>
        </div>
      }
      {data && data.Response === "False" && data.Error === "Too many results." &&
        <div className="error-box">
          <h1 className={`error-box__text_${topic}`} data-testid="cypress-search-error">Too many results, please enter a more specific query</h1>
        </div>
      }
      {data && data.Response === "False" && data.Error === "Movie not found!" &&
        <div className="error-box">
          <h1 className={`error-box__text_${topic}`} data-testid="cypress-search-error">Movie not found</h1>
        </div>
      }
      {status === "fulfilled" && data.Search && (
        <div className="movie-block">
          {data.Search.map((movie: IMovie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
          <div className="pagination-block">
            <div className="pagination-block__button" onClick={fetchMoreMovies}>Show More</div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchPage;
