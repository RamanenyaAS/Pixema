import "./Title.css"
// {text, className} : {text: string, className: string}
function Title({children} : {children:string}) {
  return ( 
    <>
      <div className="title">{children}</div>
    </>
   );
}

export default Title;