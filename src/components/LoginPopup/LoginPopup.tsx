import React from "react"
import { LoginPopupInterface } from "../../interfaces";
import LoginForm from "../LoginForm/LoginForm";
import "./LoginPopup.sass"

function LoginPopup({
  isOpened, onLogin, isLoggedIn, changeLoginPopupVisibility,
}: LoginPopupInterface) {
  return (
    <div className={`login-popup ${!isLoggedIn && isOpened ? "login-popup_opened" : ""}`}>
      <LoginForm onLogin={onLogin} />
      <button className="login-popup__close-button" type="button" onClick={changeLoginPopupVisibility}>x</button>
    </div>
  )
}

export default LoginPopup
