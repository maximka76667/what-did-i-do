import React, { MouseEventHandler, useState } from "react";
import { PointComponentInterface } from "../../interfaces";

function Point({ point: { name, description } }: PointComponentInterface) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const changeDescriptionVisibility: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <button type="button" onClick={changeDescriptionVisibility} className={`point${description ? " point_described" : ""}${isDescriptionVisible ? " point_opened" : ""}`}>
      <h3 className="point__name">{name}</h3>
      {
        description && isDescriptionVisible && <p className="point__description">{description}</p>
      }
    </button>
  );
}

export default Point;
