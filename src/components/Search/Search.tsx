import "./Search.css"
import IconFilter from "../../images/IconFilter.svg"
import IconFilterActive from "../../images/IconFilterActive.svg"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchResult } from "../../slice/pixemaSlice";

function Search({ isDisabled }: { isDisabled: boolean }) {

  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch()<any>;
  const navigate = useNavigate();

  const changeSearchText = (event: any) => {
    setSearchText(event.target.value);
  }

  const enter = (event: any) => {
    if (event.key === "Enter") {
      if (searchText.trim() !== "") {
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
      <input className="search__input" type="text" value={searchText} onChange={(e) => changeSearchText(e)} onKeyDown={(e) => enter(e)} placeholder="Search..." disabled={isDisabled} />
      <img className="search__image" src={IconFilter} alt="Filter"></img>
    </>
  );
}

export default Search;