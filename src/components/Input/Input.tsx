import { useState } from "react";
import { IInput } from "../../types/interfaces";
import "./Input.css"


function Input({ title, type, placeholder, autocomplete, onChange, isDisabled }: IInput) {
  const [hasError, setHasError] = useState(false);
  function handleChange(e: any): void {
    const maxLength = 40;
    if (onChange) {
      onChange(e);
    }
    if (e.target.value.length > maxLength) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }

  return (
    <>
      <div className="input__title">{title}</div>
      <input className="input" type={type} placeholder={placeholder} autoComplete={autocomplete} onChange={handleChange} style={{ border: hasError ? "1px solid red" : "none" }} disabled={isDisabled}></input>
      {hasError === true ? <div className="input__error">Error text</div> : null}
    </>
  );
}

export default Input;