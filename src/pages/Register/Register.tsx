import React, {
  ChangeEventHandler, FormEventHandler, useEffect, useState,
} from "react"
import { Link } from "react-router-dom";
import validator from "validator";
import { RegisterInterface, UserInterface } from "../../interfaces";
import "./Register.sass"

function Register({ onRegister }: RegisterInterface) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Validation Constants
  const [emailError, setEmailError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
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

      case "name": {
        if (!inputElement.validity.valid || !validator.isEmail(inputElement.value)) {
          setNameError(inputElement.validationMessage);
          return;
        }
        setNameError("");
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

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
    handleValidation(e.target);
  }

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
    handleValidation(e.target);
  }

  const handleRegistration: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onRegister({ email, name, password } as UserInterface);
  }

  return (
    <div className="register">
      <form className="register-form" noValidate onSubmit={handleRegistration}>
        <h1 className="register-form__heading">Register</h1>
        <label className={`register-form__label${email ? " register-form__label_has-value" : ""}`} htmlFor="email">
          <input id="email" name="email" type="email" className="register-form__input register-form__email" value={email} onChange={handleEmailChange} required />
          <span className="register-form__placeholder">Email</span>
        </label>
        <p className="register-form__input-error">{emailError}</p>
        <label className={`register-form__label${name ? " register-form__label_has-value" : ""}`} htmlFor="name">
          <input id="name" name="name" type="text" className="register-form__input register-form__name" value={name} onChange={handleNameChange} required />
          <span className="register-form__placeholder">Name</span>
        </label>
        <p className="register-form__input-error">{nameError}</p>
        <label className={`register-form__label${password ? " register-form__label_has-value" : ""}`} htmlFor="password">
          <input id="password" type="password" name="password" className="register-form__input register-form__password" value={password} onChange={handlePasswordChange} current-password="true" autoComplete="on" required />
          <span className="register-form__placeholder">Password</span>
        </label>
        <p className="register-form__input-error">{passwordError}</p>
        <div className="register-form__submit">
          <Link to="/signin" className="register-form__login">Already has an account?</Link>
          <button type="submit" className="register-form__submit-button">Please, create me user</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
