import React from "react"
import { LoginPopupInterface } from "../../interfaces";
import { Login } from "../../pages";
import "./LoginPopup.sass"

function LoginPopup({ isOpened, onLogin, isLoggedIn }: LoginPopupInterface) {
  return (
    <div className={`login-popup ${!isLoggedIn && isOpened ? "login-popup_opened" : ""}`}>
      <Login onLogin={onLogin} />
    </div>
  )
}

export default LoginPopup
