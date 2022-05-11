import React, {
  ChangeEventHandler, FormEventHandler, MouseEventHandler, useState,
} from "react"
import { PointInterface } from "../../interfaces";

function AddPoint({ isNewPoint, addCardPoint, handleClick }: {
  isNewPoint: boolean,
  addCardPoint: (point: PointInterface) => void,
  handleClick: MouseEventHandler<HTMLButtonElement>
}) {
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
        <button type="submit" disabled={!newPointName} className="add-point__submit-button">OK</button>
        <button type="button" className="add-point__cancel-button" onClick={handleClick}>x</button>
      </div>
    </form>
  )
}

export default AddPoint
