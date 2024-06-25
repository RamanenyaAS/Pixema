import { useContext } from "react";
import "./Spinner.css"
import { ThemeContext } from "../../providers/myContext";
function Spinner() {
  const [topic] = useContext(ThemeContext);
  return (
    <>
      <div className={`loader_${topic}`}></div>
    </>
  );
}

export default Spinner;