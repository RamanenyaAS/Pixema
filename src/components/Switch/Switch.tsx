import "./Switch.css"
function Switch({isDisabled}:{isDisabled: boolean}) {
  return (
    <>
    {/* сделать disabled состояние*/}
      <label className="switch">
        <input disabled={isDisabled} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </>
  );
}

export default Switch;