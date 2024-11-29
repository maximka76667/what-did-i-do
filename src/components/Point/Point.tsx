import React, {
  ChangeEventHandler, FormEventHandler, MouseEventHandler, useState,
} from "react";
import { PointComponentInterface } from "../../interfaces";
import "./Point.sass"

function Point({
  point: {
    _id,
    name,
    // description,
  },
  onUpdatePoint,
  onDeletePoint,
}: PointComponentInterface) {
  // const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [pointName, setPointName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setIsEditing(true);
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewName(e.target.value);
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsEditing(false);
    setPointName(newName);

    // If user submits the same name - do nothing
    if (newName === pointName) {
      return;
    }

    // If there is no new name - delete point
    if (!newName) {
      await onDeletePoint(_id);
      return;
    }

    // In general case update the point name
    await onUpdatePoint(_id, newName);
  }

  return (
    <div>
      {/* To do optional description
      {
        description ? (
          <button type="button"
          onClick={changeDescriptionVisibility}
          className={`point${description
            ? " point_described" : ""}${isDescriptionVisible ? " point_opened" : ""}`}>
            <h3 className="point__name">{name}</h3>
            {
              description && isDescriptionVisible &&
               <p className="point__description">{description}</p>
            }
          </button>
        ) : (
          <div className="point" onDoubleClick={handleDoubleClick}>
            <h3 className="point__name">{name}</h3>
          </div>
        )
      } */}
      {
        !isEditing
          ? (
            <button type="button" className="point" onClick={handleClick}>
              <h3 className="point__name">{pointName}</h3>
            </button>
          ) : (
            <form className="point-form" onSubmit={handleSubmit}>
              <input className="point-form__input" value={newName} onChange={handleChange} />
            </form>
          )
      }
    </div>
  );
}

export default Point;
