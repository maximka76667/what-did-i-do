import React, { MouseEventHandler, useState } from "react";
import { PointComponentInterface } from "../../interfaces";
import "./Point.sass"

function Point({ point: { name, description } }: PointComponentInterface) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const changeDescriptionVisibility: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div>
      {
        description ? (
          <button type="button" onClick={changeDescriptionVisibility} className={`point${description ? " point_described" : ""}${isDescriptionVisible ? " point_opened" : ""}`}>
            <h3 className="point__name">{name}</h3>
            {
              description && isDescriptionVisible && <p className="point__description">{description}</p>
            }
          </button>
        ) : (
          <div className="point">
            <h3 className="point__name">{name}</h3>
          </div>
        )
      }
    </div>
  );
}

export default Point;
