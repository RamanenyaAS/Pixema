import "./Select.css"
function Select() {
  return (
    <>
      <div className="select__title">title</div>
      <select name="select" className="select" >
        <option value="placeholder">Placeholder</option>
        <option value="1111111" className="select__option">1</option>
        <option value="2" className="select__option">2</option>
      </select>
    </>
  );
}

export default Select;