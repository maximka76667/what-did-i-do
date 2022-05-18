import React, {
  ChangeEventHandler, FormEventHandler, useState,
} from "react"
import { AddPointInterface } from "../../interfaces";
import "./AddPoint.sass"

function AddPoint({ isNewPoint, addCardPoint, handleClick }: AddPointInterface) {
  const [newPointName, setNewPointName] = useState("");

  const addPoint = () => {
    const newPoint = {
      name: newPointName,
    }
    if (newPointName) {
      addCardPoint(newPoint);
    }
    setNewPointName("");
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addPoint();
  };

  // Fix double submiting form's onSubmit and input's onBlur
  // Delete or leave submit on blur?
  // const onBlur: FocusEventHandler<HTMLInputElement> = (e) => {
  //   e.preventDefault();
  //   addPoint();
  //   // onSubmit(e as any);
  // };

  const onChangeNewPointName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewPointName(e.target.value);
  };

  return (
    <form className={`add-point ${isNewPoint ? "add-point_visible" : ""}`} onSubmit={handleSubmit}>
      {isNewPoint}
      <input
        className="add-point__input"
        type="text"
        autoFocus
        value={newPointName}
        onChange={onChangeNewPointName}
      />
      <div className="add-point__buttons">
        <button type="submit" disabled={!newPointName} className="add-point__submit-button">
          <span className="add-point__check" />
        </button>
        <button type="button" className="add-point__cancel-button" onClick={handleClick}>
          <span className="add-point__cancel" />
        </button>
      </div>
    </form>
  )
}

export default AddPoint
