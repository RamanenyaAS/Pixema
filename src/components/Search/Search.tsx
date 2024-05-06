import "./Search.css"
import IconFilter from "../../images/IconFilter.svg"
import IconFilterActive from "../../images/IconFilterActive.svg"

function Search({isDisabled} : {isDisabled: boolean}) {
  
  const enter = (event: any) =>{
    if(event.key === "Enter"){

    }
  }
  return (
    <>
      <input className="search__input" type="text" onKeyDown={(e) => enter(e)} placeholder="Search..." disabled={isDisabled}/>
      <img className="search__image" src={IconFilter} alt="Filter"></img>
    </>
  );
}

export default Search;