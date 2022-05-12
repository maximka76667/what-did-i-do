import { ErrorMessage } from "@hookform/error-message"
import React, { ChangeEventHandler } from "react"

function Input({
  label, watch, setValue, register, errors,
}: any) {
  const value = watch(label);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(label, e.target.value, {
      shouldValidate: true,
    })
  }

  return (
    <>
      <label
        className={`register-form__label ${value ? "register-form__label_has-value" : ""}`}
        htmlFor={label}
      >
        <input
          id={label}
          type={label}
          className="register-form__input register-form__password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register(label, {
            required: "This is required.",
          })}
          current-password="true"
          autoComplete="on"
          onChange={handleInputChange}
        />
        <span className="register-form__placeholder">Password</span>
      </label>
      <p className="register-form__input-error">
        <ErrorMessage errors={errors} name={label} />
      </p>
    </>
  )
}

export default Input
