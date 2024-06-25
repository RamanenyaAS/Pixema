import { ChangeEventHandler, useEffect, useState } from "react";
import "./Switch.css"
function Switch({isDisabled, onChange}:{isDisabled: boolean, onChange: ChangeEventHandler<HTMLInputElement>}) {
  
  const [checked, setChecked] = useState<boolean>(() => {
    const storedChecked = localStorage.getItem("checkboxState");
    return storedChecked ? JSON.parse(storedChecked) : false;
  });

  useEffect(() => {
    localStorage.setItem("checkboxState", JSON.stringify(checked));
  }, [checked]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setChecked(event.target.checked);
    onChange(event);
  };

  
  return (
    <>
      <label className="switch">
        <input checked={checked} disabled={isDisabled} onChange={handleChange} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </>
  );
}

export default Switch;