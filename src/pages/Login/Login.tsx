import React from "react"
import "./Login.sass"
import { LoginInterface } from "../../interfaces";
import { LoginForm } from "../../components";

function Login({ onLogin }: LoginInterface) {
  return (
    <div className="login">
      <div className="login__container">
        <LoginForm onLogin={onLogin} />

      </div>
    </div>
  )
}

export default Login
