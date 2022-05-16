import React, { useState } from "react"
import { Link } from "react-router-dom";
import { RegisterFormInterface, UserInterface } from "../../interfaces";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input"
import "./RegisterForm.sass"
import doggy from "../../assets/images/loading-doggy.gif";

function RegisterForm({ onRegister }: RegisterFormInterface) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleRegister(userData: UserInterface) {
    setIsSubmitting(true);
    await onRegister(userData);
    setIsSubmitting(false);
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AuthForm onFormSubmit={handleRegister} heading="Register">
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
        <button type="submit" className="auth-form__submit-button">
          {
            isSubmitting
              ? <img className="auth-form__submit-doggy" src={doggy} alt="Doggy" />
              : "Please, create me user"
          }
        </button>
      </div>
    </AuthForm>
  )
}

export default RegisterForm
