import "./Search.css"

function Search() {
  
  const enter = (event: any) =>{
    if(event.key === "Enter"){

    }
  }
  return (
    <>
      <input type="text" onKeyDown={(e) => enter(e)} placeholder="Search..." />
    </>
  );
}

export default Search;