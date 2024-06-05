import "./ButtonGroup.css"
import IconFavorites from "../../images/IconFavorites.svg"
import IconShare from "../../images/IconShare.svg"
import { useState } from "react";
import { IMovie } from "../../types/interfaces";


function ButtonGroup({ movie }: { movie: IMovie }) {

  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false);

  const handleAddToFavorites = () => {
    const storedMovie = localStorage.getItem("movies");
    let favoritesMovie = storedMovie ? JSON.parse(storedMovie) : [];
    const isAlreadyInFavorites = favoritesMovie.some(
      (favMovie: IMovie) => favMovie.imdbID === movie.imdbID
    );

    if (isAlreadyInFavorites) {
      setIsAlreadyAdded(true);
      alert("Фильм уже добавлен в избранное")
    } else {
      favoritesMovie.push(movie);
      localStorage.setItem("movies", JSON.stringify(favoritesMovie));
    }
  };


  return (
    <>
      <div className="button-group-block">
        <div className="left-button" onClick={handleAddToFavorites}>
          {isAlreadyAdded === true ? <img className="button-group__image" src={IconFavorites} alt="Favorites" /> : <img className="button-group__image" src={IconFavorites} alt="Favorites" />} 
        </div>
        <div className="right-button">
          <img className="button-group__image" src={IconShare} alt="Share" />
        </div>
      </div>
    </>
  );
}

export default ButtonGroup;