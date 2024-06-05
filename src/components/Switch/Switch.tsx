import "./Switch.css"
function Switch({isDisabled}:{isDisabled: boolean}) {
  return (
    <>
      <label className="switch">
        <input disabled={isDisabled} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </>
  );
}

export default Switch;