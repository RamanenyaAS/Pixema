import "./ButtonGroup.css"
import IconFavorites from "../../images/IconFavorites.svg"
import IconFavoritesActive from "../../images/IconFavoritesLight.svg"
import IconShare from "../../images/IconShare.svg"
import { useEffect, useState } from "react";
import { IMovie } from "../../types/interfaces";

import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import { useLocation } from "react-router-dom";


function ButtonGroup({ movie }: { movie: IMovie }) {

  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const shareUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;

  useEffect(() => {
    const storedMovie = localStorage.getItem("movies");
    const favoritesMovie = storedMovie ? JSON.parse(storedMovie) : [];
    const isAlreadyInFavorites = favoritesMovie.some(
      (favMovie: IMovie) => favMovie.imdbID === movie.imdbID
    );

    if (isAlreadyInFavorites) {
      setIsAlreadyAdded(true);
    }
  }, [movie.imdbID]);

  const handleAddToFavorites = () => {
    const storedMovie = localStorage.getItem("movies");
    let favoritesMovie = storedMovie ? JSON.parse(storedMovie) : [];
    const isAlreadyInFavorites = favoritesMovie.some(
      (favMovie: IMovie) => favMovie.imdbID === movie.imdbID
    );

    if (isAlreadyInFavorites) {
      setIsAlreadyAdded(true);
      alert("The movie has already been added to your favorites")
    } else {
      favoritesMovie.push(movie);
      localStorage.setItem("movies", JSON.stringify(favoritesMovie));
      setIsAlreadyAdded(true);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="button-group-block">
        <div className="left-button" onClick={handleAddToFavorites}>
          {isAlreadyAdded === true ? <img className="button-group__image" src={IconFavoritesActive} alt="Favorites" /> : <img className="button-group__image" src={IconFavorites} alt="Favorites" />}
        </div>
        <div className="right-button" onClick={toggleDropdown}>
          <img className="button-group__image" src={IconShare} alt="Share" />
        </div>
        {isOpen &&
          <div className="link-list">
            <FacebookShareButton url={shareUrl} >
              <FacebookIcon className="link-icon" onClick={toggleDropdown} size={40} round={true}></FacebookIcon>
            </FacebookShareButton>
            <TelegramShareButton url={shareUrl}>
              <TelegramIcon className="link-icon" onClick={toggleDropdown} size={40} round={true}></TelegramIcon>
            </TelegramShareButton>
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon className="link-icon" onClick={toggleDropdown} size={40} round={true}></WhatsappIcon>
            </WhatsappShareButton>
            <EmailShareButton url={shareUrl}>
              <EmailIcon className="link-icon" onClick={toggleDropdown} size={40} round={true}></EmailIcon>
            </EmailShareButton>
          </div>
        }
      </div >
    </>
  );
}

export default ButtonGroup;