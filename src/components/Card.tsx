import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import mainApi from "../helpers/mainApi";
import { CardComponentInterface, PointInterface } from "../interfaces";
import Point from "./Point";

function Card({
  card: {
    _id, date, points, owner,
  }, todayCard,
}: CardComponentInterface) {
  const [cardId, setCardId] = useState("");
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
        points: [],
      })
        .then((res) => {
          setCardId(res._id);
          mainApi.updateCard(res._id, newPoint);
        })
    } else {
      mainApi.updateCard(cardId, newPoint);
    }
  }

  const addPoint = () => {
    const newPoint = {
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

  useEffect(() => {
    setPoints(points);
    setCardId(_id);
    // eslint-disable-next-line
  }, [])

  return (
    <div className="card">
      <h2 className="card__date">{date}</h2>
      <p>{cardId}</p>
      <p>{owner}</p>
      <ul className="card__points">
        {
          currentPoints && currentPoints.map((point, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className="card__points-item" key={index}>
              <Point point={point} />
            </li>
          ))
        }
      </ul>
      {
        isNewPoint
          ? (
            <form onSubmit={onSubmit}>
              <input
                type="text"
                value={newPointName}
                onChange={onChangeNewPointName}
                autoFocus
              />
            </form>
          ) : ""
      }
      <button type="submit" className="card__add-button" onClick={handleClick}>+</button>
    </div>
  );
}

export default Card;
