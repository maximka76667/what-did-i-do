import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/mainApi";
import { CardComponentInterface, PointInterface } from "../../interfaces";
import Point from "../Point/Point";
import "./Card.sass"
import AddPoint from "../AddPoint/AddPoint";

function Card({
  card: {
    _id, date, points,
    // owner,
  }, todayCard, onLoginButtonClick,
}: CardComponentInterface) {
  const [cardId, setCardId] = useState("");
  const [currentPoints, setPoints] = useState<PointInterface[]>([]);
  const [isNewPoint, setIsNewPoint] = useState(false);

  const { email } = useContext(CurrentUserContext);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (todayCard && !email && onLoginButtonClick) {
      onLoginButtonClick();
      return;
    }
    setIsNewPoint(!isNewPoint);
  };

  async function updateCard(newPoint: PointInterface) {
    // Problem: user creates new today card on every point adding
    // Fix: remove this card and create another one with server data
    let id = cardId;
    if (todayCard) {
      const newCard = await mainApi.addCard({
        date,
        points: [],
      })
      id = newCard._id;
      setCardId(id);
    }
    mainApi.updateCard(id, newPoint);
  }

  const addCardPoint = (newPoint: PointInterface) => {
    updateCard(newPoint);
    if (currentPoints && newPoint) {
      setPoints(
        [...currentPoints, newPoint],
      );
    }
  };

  useEffect(() => {
    setPoints(points);
    setCardId(_id);
    // eslint-disable-next-line
  }, [])

  return (
    <div className="card">
      <h2 className="card__date">{date}</h2>
      {/* <p>{cardId}</p>
      <p>{owner}</p> */}
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
            <AddPoint
              isNewPoint={isNewPoint}
              addCardPoint={addCardPoint}
              handleClick={handleClick}
            />
          )
          : ""
      }
      <button type="button" className={`card__add-button ${isNewPoint ? "card__add-button_hidden" : ""}`} onClick={handleClick}>+</button>
    </div>
  );
}

export default Card;
