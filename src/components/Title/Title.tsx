import { useContext } from "react";
import "./Title.css"
import { ThemeContext } from "../../providers/myContext";
function Title({children} : {children:string}) {
  const [topic] = useContext(ThemeContext);

  return ( 
    <>
      <div className={`title title_${topic}`}>{children}</div>
    </>
   );
}

export default Title;