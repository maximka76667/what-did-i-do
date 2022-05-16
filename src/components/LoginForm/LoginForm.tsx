import React from "react"
import { Link } from "react-router-dom";
import { LoginFormInterface } from "../../interfaces";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import "./LoginForm.sass"

function LoginForm({ onLogin }: LoginFormInterface) {
  return (
    <AuthForm onFormSubmit={onLogin} heading="Login">
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
      <Input label="password" type="password" />
      <div className="auth-form__register">
        <Link className="auth-form__register-link" to="/signup">I don&apos;t have an account</Link>
      </div>
      <div className="auth-form__submit">
        <label className="auth-form__submit-label">
          <input type="checkbox" name="isSavedSession" id="isSavedSession" />
          Remember me
        </label>
        <button type="submit" className="auth-form__submit-button">Login</button>
      </div>
    </AuthForm>
  )
}

export default LoginForm
