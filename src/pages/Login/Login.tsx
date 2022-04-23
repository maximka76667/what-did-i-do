import React, { ChangeEventHandler, useState } from "react"
import "./Login.sass"
import validator from "validator";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation Constants
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  function handleValidation(inputElement: HTMLInputElement) {
    switch (inputElement.name) {
      case "email": {
        if (!inputElement.validity.valid || !validator.isEmail(inputElement.value)) {
          setEmailError(inputElement.validationMessage);
          return;
        }
        setEmailError("");
        break;
      }

      case "password": {
        if (!inputElement.validity.valid) {
          setPasswordError(inputElement.validationMessage);
          return;
        }
        setPasswordError("");
        break;
      }

      default:
        break;
    }
  }

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    handleValidation(e.target);
  }

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
    handleValidation(e.target);
  }

  return (
    <div className="login">
      <form className="login__form" noValidate>
        <h1 className="login__heading">Login</h1>
        <label className={`login__label${email ? " login__label_has-value" : ""}`} htmlFor="email">
          <input id="email" name="email" type="email" className="login__input login__email" value={email} onChange={handleEmailChange} required />
          <span className="login__placeholder">Email</span>
        </label>
        <p className="login__input-error">{emailError}</p>

        <label className={`login__label${password ? " login__label_has-value" : ""}`} htmlFor="email">
          <input type="password" name="password" className="login__input login__password" value={password} onChange={handlePasswordChange} required />
          <span className="login__placeholder">Password</span>
        </label>
        <p className="login__input-error">{passwordError}</p>
        <div className="login__submit">
          <label className="login__submit-label">
            <input type="checkbox" name="isSavedSession" id="isSavedSession" />
            Remember me
          </label>
          <button type="submit" className="login__submit-button">Login</button>

        </div>
      </form>
    </div>
  )
}

export default Login
