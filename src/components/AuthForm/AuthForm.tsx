import React from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { UserInterface, AuthFormInterface } from "../../interfaces";
import "./AuthForm.sass"

function AuthForm({ onFormSubmit, heading, children }: AuthFormInterface) {
  const useFormMethods = useForm<UserInterface>();
  const { handleSubmit } = useFormMethods;

  const onSubmit: SubmitHandler<UserInterface> = ((data) => onFormSubmit(data));

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...useFormMethods}>
      <form className="auth-form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <h1 className="auth-form__heading">{heading}</h1>
        {/* Todo array.map to render inputs */}
        {children}
        {/* Add repeat password field */}
      </form>
    </FormProvider>
  )
}

export default AuthForm
