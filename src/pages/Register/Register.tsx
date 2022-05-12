import React from "react"
import validator from "validator";
import { RegisterInterface } from "../../interfaces";
import "./Register.sass"
import RegisterForm from "../../components/RegisterForm/RegisterForm";

function Register({ onRegister }: RegisterInterface) {
  return (
    <div className="register">
      <RegisterForm onRegister={onRegister} />
    </div>
  )
}

export default Register;
