import React from "react"
import { LoginPopupInterface } from "../../interfaces";
import LoginForm from "../LoginForm/LoginForm";
import "./LoginPopup.sass"

function LoginPopup({
  isOpened, onLogin, isLoggedIn, closeLoginPopup,
}: LoginPopupInterface) {
  return (
    <div className={`login-popup ${!isLoggedIn && isOpened ? "login-popup_opened" : ""}`}>
      {/* eslint-disable-next-line */}
      <div className="login-popup__overlay" onClick={closeLoginPopup}> </div>
      <div className="login-popup__container">
        <LoginForm onLogin={onLogin} />
        <button className="login-popup__close-button" type="button" onClick={closeLoginPopup}>x</button>
      </div>
    </div>
  )
}

export default LoginPopup
