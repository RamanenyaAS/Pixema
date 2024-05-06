import "./User.css"
import ArrowDown from "../../images/IconArrowDown.svg"
function User({username} : {username: string}) {
  let initial = username.split(" ").reduce(((res,item) => res + item[0]),"").toLocaleUpperCase();
  return (
    <>
      <div className="user-block">
        <div className="user-block__initial">{initial}</div>
        <div className="user-block__name">{username}</div>
        <img className="user-block__image" src={ArrowDown} alt="Arrow Down" />
      </div>
    </>
  );
}

export default User;