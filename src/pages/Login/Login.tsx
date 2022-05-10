import React from "react"
import "./Login.sass"
import { LoginInterface } from "../../interfaces";
import { LoginForm } from "../../components";

function Login({ onLogin }: LoginInterface) {
  return (
    <div className="login">
      <LoginForm onLogin={onLogin} />
    </div>
  )
}

export default Login
