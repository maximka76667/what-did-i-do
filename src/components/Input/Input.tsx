import { ErrorMessage } from "@hookform/error-message"
import React, { ChangeEventHandler } from "react"
import { useFormContext } from "react-hook-form";
import capitalize from "../../utils/capitalize";
import { InputInterface } from "../../interfaces";

function Input({ label, type, validation }: InputInterface) {
  const {
    watch, setValue, register, formState: { errors },
  } = useFormContext();
  const value = watch(label);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(label, e.target.value, {
      shouldValidate: true,
    })
  }

  return (
    <>
      {/* To do components  */}
      <label
        className={`auth-form__label ${value ? "auth-form__label_has-value" : ""}`}
        htmlFor={label}
      >
        <input
          id={label}
          type={type}
          className={`auth-form__input auth-form__${label}`}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register(label, {
            required: "This field is required",
            ...validation,
          })}
          autoComplete="on"
          onChange={handleInputChange}
        />
        <span className="auth-form__placeholder">{capitalize(label)}</span>
      </label>
      <p className="auth-form__input-error">
        <ErrorMessage errors={errors} name={label} />
      </p>
    </>
  )
}

export default Input
