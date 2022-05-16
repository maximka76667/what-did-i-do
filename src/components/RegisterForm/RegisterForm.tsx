import React from "react"
import { Link } from "react-router-dom";
import { RegisterFormInterface } from "../../interfaces";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input"
import "./RegisterForm.sass"

function RegisterForm({ onRegister }: RegisterFormInterface) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AuthForm onFormSubmit={onRegister} heading="Register">
      <Input
        label="email"
        type="email"
        validation={{
          pattern: {
            value: /^\S+@\S+$/i,
            message: "This field must be an email",
          },
        }}
      />
      <Input label="name" type="text" />
      <Input label="password" type="password" />
      <div className="auth-form__submit">
        <Link to="/signin" className="auth-form__login">Already has an account?</Link>
        <button type="submit" className="auth-form__submit-button">Please, create me user</button>
      </div>
    </AuthForm>
  )
}

export default RegisterForm
