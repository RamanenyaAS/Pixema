import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useState } from "react";

function SignUpFormPage() {


  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");



  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const MAX_EMAIL_LENGTH = 30;
  const MAX_PASSWORD_LENGTH = 40;


  const handleEmailChange = (ev: any) => {
    if (ev.target.value.length > MAX_EMAIL_LENGTH) {
      setEmailError(
        `Email length should be less the ${MAX_EMAIL_LENGTH} characters.`
      );
    } else {
      setEmailError("");
      setEmail(ev.target.value);
    }
  };
  const handlePasswordChange = (ev: any) => {
    if (ev.target.value.length > MAX_PASSWORD_LENGTH) {
      setPasswordError(
        `Password length should be less the ${MAX_PASSWORD_LENGTH} characters.`
      );
    } else {
      setPasswordError("");
      setPassword(ev.target.value);
    }
  };


  return (
    <>
      {/* <div className="form-container">
        <div className="signUp-container">
          <form className="form">
            <div className="form__title" >Sign In</div>
            <Input title="Email" type="email" placeholder="Your email" onChange={handleEmailChange} autocomplete={email} isDisabled={false}></Input>
            <Input title="Password" type="password" placeholder="Your password" onChange={handlePasswordChange} autocomplete={password} isDisabled={false}></Input>
            <Link to="/reset" className="link" >
              <div className="reset">Forgot password?</div>
            </Link>
            <div className="button-block">
              <Button type="button-primary" isDisabled={false} text="Sign In"></Button>
            </div>
            <div className="subtitle-block">
              <div className="subtitle-block__text" >Don’t have an account?</div>
              <Link to="/signUp" className="subtitle-block__link">Sign Up</Link>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
}

export default SignUpFormPage;