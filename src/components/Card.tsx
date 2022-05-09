import React, {
  ChangeEventHandler, FocusEventHandler, FormEventHandler, MouseEventHandler, useEffect, useState,
} from "react";
import mainApi from "../helpers/mainApi";
import { CardComponentInterface, PointInterface } from "../interfaces";
import Point from "./Point";

function Card({
  card: {
    _id, date, points, owner,
  }, todayCard,
}: CardComponentInterface) {
  const [currentPoints, setPoints] = useState<PointInterface[]>([]);
  const [isNewPoint, setIsNewPoint] = useState(false);
  const [newPointName, setNewPointName] = useState("");

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsNewPoint(true);
  };

  function updateCard(newPoint: PointInterface) {
    if (todayCard) {
      mainApi.addCard({
        date,
        points: [...currentPoints, newPoint],
      })
      return;
    }
    mainApi.updateCard(_id, newPoint);
  }

  const addPoint = () => {
    const newPoint = {
      _id: "",
      name: newPointName,
    }
    updateCard(newPoint);
    if (currentPoints && newPointName) {
      setPoints(
        [...currentPoints, newPoint],
      );
    }
    setIsNewPoint(false);
    setNewPointName("");
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addPoint();
  };

  const onBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    addPoint();
  };

  const onChangeNewPointName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewPointName(e.target.value);
  };

  useEffect(() => {
    setPoints(points);
    // eslint-disable-next-line
  }, [])

  return (
    <div className="card">
      <h2 className="card__date">{date}</h2>
      <p>{_id}</p>
      <p>{owner}</p>
      <ul className="card__points">
        {
          currentPoints && currentPoints.map((point) => (
            <li className="card__points-item" key={point._id}>
              <Point point={point} />
            </li>
          ))
        }
      </ul>
      {
        isNewPoint
          ? (
            <form onSubmit={onSubmit}>
              <input type="text" value={newPointName} onChange={onChangeNewPointName} autoFocus onBlur={onBlur} />
            </form>
          ) : ""
      }
      <button type="submit" className="card__add-button" onClick={handleClick}>+</button>
    </div>
  );
}

export default Card;
