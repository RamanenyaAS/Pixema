import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { IInitialState, IMovie } from "../../types/interfaces";
import { useEffect } from "react";
import { fetchOneMovie } from "../../slice/pixemaSlice";

function SelectedMoviePage() {

  const { movieId } = useParams<string>();
  const dispatch = useDispatch()<any>;
  const selectedMovie: IMovie[] | any = useSelector((state: IInitialState) => state.oneMovie);
  const status = useSelector((state: IInitialState) => state.status)

  useEffect(() => {
    if (typeof movieId === "string") {
      dispatch(fetchOneMovie(movieId));
    }
  }, [movieId]);

  if (!selectedMovie) {
    <Link to={"/*"}></Link>
  }


  return (
    <>
      <div className="selected-container">
        {status === "fulfilled" ?
          <>
          <div className="div">{selectedMovie.Title}</div>
          </> : null}
      </div>
    </>
  );
}

export default SelectedMoviePage;