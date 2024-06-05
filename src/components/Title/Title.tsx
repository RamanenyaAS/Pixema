import "./Title.css"
function Title({children} : {children:string}) {
  return ( 
    <>
      <div className="title">{children}</div>
    </>
   );
}

export default Title;