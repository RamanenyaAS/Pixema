import "./ErrorPage.css"
import ErrorImage from "../../images/Error.svg"
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../providers/myContext";

function ErrorPage() {
  
  const [topic] = useContext(ThemeContext);

  return (
    <>
      <div className="error-container">
        <img className="error__image" src={ErrorImage} alt="404 Error Image" />
        <div className={`error__text_${topic}`}>We can’t find the page you are looking for</div>
        <Link to={"/"}>
          <Button text='Go Home' type='button-primary' isDisabled={false}></Button>
        </Link>
      </div>
    </>);
}

export default ErrorPage;