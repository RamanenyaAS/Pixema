import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IInitialState, IMovie } from "../../types/interfaces";
import { useEffect } from "react";
import { fetchOneMovie } from "../../slice/pixemaSlice";

function SelectedMoviePage() {
  
  const {movieId} = useParams<string>();
  const dispatch = useDispatch()<any>;
  const selectedMovie: IMovie[] = useSelector((state: IInitialState) => state.oneMovie);
  const status = useSelector((state: IInitialState) => state.status)

  useEffect(() => {
    if (typeof movieId === "string"){
      dispatch(fetchOneMovie({movieId}));
    }
  }, [movieId]);
  
  if (!selectedMovie){
    return null;
    // сделать позже роут на главную страницу
  }


  return ( 
    <>
      <div className="selected-container">

      </div>
    </>
   );
}

export default SelectedMoviePage;