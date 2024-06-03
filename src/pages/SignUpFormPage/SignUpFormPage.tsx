import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function SignUpFormPage() {
  return (
    <>
      <div className="container">
        <Link to="/" className="link">
          <div className="" >Back to home</div>
        </Link>
        <div className="" >Sign In</div>
        <div className="signUp-container">
          <form className="">
            <Input title="Email" type="email" placeholder="Your email" onChange={handleEmailChange} maxLength={MAX_EMAIL_LENGTH}></Input>
            <Input title="Password" type="password" placeholder="Your password" onChange={handlePasswordChange} maxLength={MAX_PASSWORD_LENGTH}></Input>
            <Link to="/reset" className="link" >Forgot password?</Link>
            <Button type="button-primary" isDisabled={false} text="Sign In"></Button>
            <div className="subtitle-block">
              <div className="" >Don’t have an account?</div>
              <Link to="/signUp" className="link">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpFormPage;