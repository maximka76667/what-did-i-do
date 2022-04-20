import React, {
  ChangeEventHandler, FocusEventHandler, FormEventHandler, MouseEventHandler, useEffect, useState,
} from 'react';
import { CardInterface, PointInterface } from '../interfaces/index';
import Point from './Point';

function Card(props: { card: CardInterface }) {
  const [points, setPoints] = useState<PointInterface[]>();
  const [isNewPoint, setIsNewPoint] = useState(false);
  const [newPointName, setNewPointName] = useState('');

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsNewPoint(true);
  };

  const addPoint = () => {
    if (points && newPointName) {
      setPoints(
        [...points, {
          _id: '',
          name: newPointName,
        }],
      );
    }
    setIsNewPoint(false);
    setNewPointName('');
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

  const { card } = props;

  useEffect(() => {
    setPoints(card.points);
    // eslint-disable-next-line
  }, [])

  return (
    <div className="card">
      <h2 className="card__date">{card.date}</h2>
      <ul className="card__points">
        {
          points && points.map((point) => (
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
          ) : ''
      }
      <button type="submit" className="card__add-button" onClick={handleClick}>+</button>
    </div>
  );
}

export default Card;
