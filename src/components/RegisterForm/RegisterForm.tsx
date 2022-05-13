import React from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterFormInterface, UserInterface } from "../../interfaces";
import Input from "../Input/Input"

function RegisterForm({ onRegister }: RegisterFormInterface) {
  const useFormMethods = useForm<UserInterface>();

  const onSubmit: SubmitHandler<UserInterface> = ((data) => onRegister(data));

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...useFormMethods}>
      {/* Todo common form component for register and login */}
      <form className="register-form" noValidate onSubmit={useFormMethods.handleSubmit(onSubmit)}>
        <h1 className="register-form__heading">Register</h1>
        <Input
          label="email"
          type="email"
        />
        <Input
          label="name"
          type="text"
        />
        <Input
          label="password"
          type="password"
        />
        <div className="register-form__submit">
          <Link to="/signin" className="register-form__login">Already has an account?</Link>
          <button type="submit" className="register-form__submit-button">Please, create me user</button>
        </div>
      </form>
    </FormProvider>
  )
}

export default RegisterForm
