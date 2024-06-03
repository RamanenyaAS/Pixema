import "./ErrorPage.css"
import ErrorImage from "../../images/Error.svg"
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";


// ДОДЕЛАТЬ, найти нормальную фото + стили

function ErrorPage() {
  return (
    <>
      <div className="error-container">
        <img className="error-image" src={ErrorImage} alt="404 Error Image" />
        <div className="error-text">We can’t find the page you are looking for</div>
        <Link to={"/"}>
          <Button text='Go Home' type='button-primary' isDisabled={false}></Button>
        </Link>
      </div>
    </>);
}

export default ErrorPage;