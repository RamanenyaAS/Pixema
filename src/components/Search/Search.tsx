import "./Search.css"
import IconFilter from "../../images/IconFilter.svg"
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchResult, setSearchTerm } from "../../slice/pixemaSlice";
import { ThemeContext } from "../../providers/myContext";

function Search({ isDisabled }: { isDisabled: boolean }) {

  const [searchText, setSearchText] = useState("");
  const [topic] = useContext(ThemeContext);
  const dispatch = useDispatch()<any>;
  const navigate = useNavigate();

  const changeSearchText = (event: any) => {
    setSearchText(event.target.value);
  }

  const enter = (event: any) => {
    if (event.key === "Enter") {
      if (searchText.trim() !== "") {
        dispatch(setSearchTerm(searchText));
        navigate("/search");
        dispatch(searchResult({ text: searchText, page: 1 }));
        setSearchText("");
      } else {
        alert("Search input cannot be empty");
      }
    }
  }

  return (
    <>
      <div className="search">
        <input className={`search__input search__input_${topic}`} type="text" value={searchText} onChange={(e) => changeSearchText(e)} onKeyDown={(e) => enter(e)} placeholder="Search..." disabled={isDisabled} />
        <img className="search__image" src={IconFilter} alt="Filter"></img>
      </div>
    </>
  );
}

export default Search;