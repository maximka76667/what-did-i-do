import React, { ChangeEventHandler, FormEventHandler, useState } from "react"
import validator from "validator";
import { LoginFormInterface, UserInterface } from "../../interfaces";
import "./LoginForm.sass"

function LoginForm({ onLogin }: LoginFormInterface) {
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

  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onLogin({ email, password } as UserInterface);
  }

  return (
    <form className="login-form" noValidate onSubmit={handleLogin}>
      <h1 className="login-form__heading">Login</h1>
      <label className={`login-form__label${email ? " login-form__label_has-value" : ""}`} htmlFor="email">
        <input id="email" name="email" type="email" className="login-form__input login-form__email" value={email} onChange={handleEmailChange} required />
        <span className="login-form__placeholder">Email</span>
      </label>
      <p className="login-form__input-error">{emailError}</p>
      <label className={`login-form__label${password ? " login-form__label_has-value" : ""}`} htmlFor="password">
        <input id="password" type="password" name="password" className="login-form__input login-form__password" value={password} onChange={handlePasswordChange} current-password="true" autoComplete="on" required />
        <span className="login-form__placeholder">Password</span>
      </label>
      <p className="login-form__input-error">{passwordError}</p>
      <div className="login-form__submit">
        <label className="login-form__submit-label">
          <input type="checkbox" name="isSavedSession" id="isSavedSession" />
          Remember me
        </label>
        <button type="submit" className="login-form__submit-button">Login</button>
      </div>
    </form>
  )
}

export default LoginForm
