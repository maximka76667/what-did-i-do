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
  }, onUpdatePoint,
}: PointComponentInterface) {
  // const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [pointName, setPointName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleDoubleClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsEditing(true);
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewName(e.target.value);
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await onUpdatePoint(_id, newName);
    setIsEditing(false);
    setPointName(newName);
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
            <div className="point" onDoubleClick={handleDoubleClick}>
              <h3 className="point__name">{pointName}</h3>
            </div>
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
