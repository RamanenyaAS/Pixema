import "./Button.css"
import { IButton } from "../../types/interfaces";

function Button({text, type, isDisabled} : IButton) {
  return ( 
    <>
      <button className={type} disabled={isDisabled}>{text}</button>
    </>
   );
}

export default Button;