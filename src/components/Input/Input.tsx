import { ErrorMessage } from "@hookform/error-message"
import React, { ChangeEventHandler } from "react"
import { useFormContext } from "react-hook-form";
import capitalize from "../../helpers/capitalize";
import { InputInterface } from "../../interfaces";

function Input({ label, type }: InputInterface) {
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
        className={`register-form__label ${value ? "register-form__label_has-value" : ""}`}
        htmlFor={label}
      >
        <input
          id={label}
          type={type}
          className={`register-form__input register-form__${label}`}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register(label, {
            required: "This is required.",
          })}
          autoComplete="on"
          onChange={handleInputChange}
        />
        <span className="register-form__placeholder">{capitalize(label)}</span>
      </label>
      <p className="register-form__input-error">
        <ErrorMessage errors={errors} name={label} />
      </p>
    </>
  )
}

export default Input
