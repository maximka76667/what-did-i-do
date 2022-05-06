import React from "react"
import { UserFunction } from "../interfaces";
import { Login } from "../pages";

function LoginPopup({ isOpened, onLogin, isLoggedIn }: {
  isOpened: boolean, onLogin: UserFunction, isLoggedIn: boolean
}) {
  return (
    <div className={`login-popup ${!isLoggedIn && isOpened ? "login-popup_opened" : ""}`}>
      <Login onLogin={onLogin} />
    </div>
  )
}

export default LoginPopup
