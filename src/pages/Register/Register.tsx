import React from "react"
import { Link } from "react-router-dom";
import validator from "validator";
import { useForm, SubmitHandler } from "react-hook-form"
import { RegisterInterface, UserInterface } from "../../interfaces";
import "./Register.sass"
import Input from "../../components/Input/Input";

function Register({ onRegister }: RegisterInterface) {
  const {
    register, handleSubmit, formState: { errors }, setValue, watch,
  } = useForm<UserInterface>();

  const onSubmit: SubmitHandler<UserInterface> = ((data) => onRegister(data));

  return (
    <div className="register">
      <form className="register-form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <h1 className="register-form__heading">Register</h1>
        <Input
          label="email"
          watch={watch}
          setValue={setValue}
          register={register}
          errors={errors}
        />
        <Input
          label="name"
          watch={watch}
          setValue={setValue}
          register={register}
          errors={errors}
        />
        <Input
          label="password"
          watch={watch}
          setValue={setValue}
          register={register}
          errors={errors}
        />
        <div className="register-form__submit">
          <Link to="/signin" className="register-form__login">Already has an account?</Link>
          <button type="submit" className="register-form__submit-button">Please, create me user</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
