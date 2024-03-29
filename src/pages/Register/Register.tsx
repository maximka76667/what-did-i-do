import React from "react"
import { RegisterInterface } from "../../interfaces";
import "./Register.sass"
import { RegisterForm } from "../../components";

function Register({ onRegister }: RegisterInterface) {
  return (
    <div className="register">
      <RegisterForm onRegister={onRegister} />
    </div>
  )
}

export default Register;
