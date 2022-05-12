import React, {
  ChangeEventHandler, FormEventHandler, useState,
} from "react"
import { Link } from "react-router-dom";
import validator from "validator";
import { useForm, SubmitHandler } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message";
import { RegisterInterface, UserInterface } from "../../interfaces";
import "./Register.sass"

function Register({ onRegister }: RegisterInterface) {
  const {
    register, handleSubmit, formState: { errors }, setValue, watch,
  } = useForm<UserInterface>();

  const onSubmit: SubmitHandler<UserInterface> = ((data) => onRegister(data));
  const email = watch("email");
  const name = watch("name");
  const password = watch("password");
  // To do
  // Find the solution to validate all inputs
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  // Validation Constants
  // const [emailError, setEmailError] = React.useState("");
  // const [nameError, setNameError] = React.useState("");
  // const [passwordError, setPasswordError] = React.useState("");

  // function handleValidation(inputElement: HTMLInputElement) {
  //   switch (inputElement.name) {
  //     case "email": {
  //       if (!inputElement.validity.valid || !validator.isEmail(inputElement.value)) {
  //         setEmailError(inputElement.validationMessage);
  //         return;
  //       }
  //       setEmailError("");
  //       break;
  //     }

  //     case "name": {
  //       if (!inputElement.validity.valid) {
  //         setNameError(inputElement.validationMessage);
  //         return;
  //       }
  //       setNameError("");
  //       break;
  //     }

  //     case "password": {
  //       if (!inputElement.validity.valid) {
  //         setPasswordError(inputElement.validationMessage);
  //         return;
  //       }
  //       setPasswordError("");
  //       break;
  //     }

  //     default:
  //       break;
  //   }
  // }

  // const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setEmail(e.target.value);
  //   handleValidation(e.target);
  // }

  // const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setName(e.target.value);
  //   handleValidation(e.target);
  // }

  // const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setPassword(e.target.value);
  //   handleValidation(e.target);
  // }

  // const handleRegistration: FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();
  //   onRegister({ email, name, password });
  // }

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.name as keyof UserInterface, e.target.value, {
      shouldValidate: true,
    })
  }

  return (
    <div className="register">
      <form className="register-form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <h1 className="register-form__heading">Register</h1>
        <label
          className={`register-form__label${email ? " register-form__label_has-value" : ""}`}
          htmlFor="email"
        >
          {/* Todo input component */}
          <input
            id="email"
            // name="email"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("email" as const, {
              required: "This is required.",
            })}
            type="email"
            className="register-form__input register-form__email"
            // value={email}
            onChange={handleInputChange}
          />
          <span className="register-form__placeholder">Email</span>
        </label>
        <p className="register-form__input-error">
          <ErrorMessage errors={errors} name="email" />
        </p>
        <label
          className={`register-form__label${name ? " register-form__label_has-value" : ""}`}
          htmlFor="name"
        >
          <input
            id="name"
            // name="name"
            type="text"
            className="register-form__input register-form__name"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("name" as const, {
              required: "This is required.",
            })}
            // value={name}
            onChange={handleInputChange}
          />
          <span className="register-form__placeholder">Name</span>
        </label>
        <p className="register-form__input-error">
          <ErrorMessage errors={errors} name="name" />
        </p>
        <label
          className={`register-form__label${password ? " register-form__label_has-value" : ""}`}
          htmlFor="password"
        >
          <input
            id="password"
            type="password"
            // name="password"
            className="register-form__input register-form__password"
            // value={password}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register("password" as const, {
              required: "This is required.",
            })}
            current-password="true"
            autoComplete="on"
            onChange={handleInputChange}
          />
          <span className="register-form__placeholder">Password</span>
        </label>
        <p className="register-form__input-error">
          <ErrorMessage errors={errors} name="password" />
        </p>
        <div className="register-form__submit">
          <Link to="/signin" className="register-form__login">Already has an account?</Link>
          <button type="submit" className="register-form__submit-button">Please, create me user</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
