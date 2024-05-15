import "./Select.css"
// {title,placeholder,option1, option2} : {title: string, placeholder: string, option1: string, option2: string}
function Select() {
  return (
    <>
      <div className="select__title">title</div>
      <select name="select" className="select" >
        <option value="placeholder">Placeholder</option>
        <option value="1111111" className="select__option">1</option>
        <option value="2" className="select__option">2</option>
      </select>
      {/* <div className="block">
        <input type="select" />
        <div className="placeholder">placeholder</div>
        <ul>
          <li>s1</li>
          <li>s2</li>
        </ul>
      </div> */}
    </>
  );
}

export default Select;