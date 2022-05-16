import React, { useState } from "react"
import { Link } from "react-router-dom";
import { LoginFormInterface, UserInterface } from "../../interfaces";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import "./LoginForm.sass"
import doggy from "../../assets/images/loading-doggy.gif";

function LoginForm({ onLogin }: LoginFormInterface) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleLogin(userData: UserInterface) {
    setIsSubmitting(true);
    await onLogin(userData);
    setIsSubmitting(false);
  }

  return (
    <AuthForm onFormSubmit={handleLogin} heading="Login">
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
        <button type="submit" className="auth-form__submit-button">
          {
            isSubmitting
              ? <img className="auth-form__submit-doggy" src={doggy} alt="Doggy" />
              : "Login"
          }
        </button>
      </div>
    </AuthForm>
  )
}

export default LoginForm
