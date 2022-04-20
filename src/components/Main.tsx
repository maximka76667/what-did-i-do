import React from 'react';
import Card from './Card';
import { CardInterface } from '../interfaces';

function Main(props: { cards: CardInterface[] }) {
  const { cards } = props;

  const today = new Date();

  const todayCard = {
    _id: '0',
    points: [],
    date: `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`,
  };

  return (
    <main className="content">
      <h1 className="content__heading">How was your day?</h1>
      <p className="content__subheading">Would you like to share with me your achievements today?</p>
      <div className="content__container">
        <Card card={todayCard} key={todayCard.date} />
        {
          cards.map((card) => (
            <Card card={card} key={card.date} />
          ))
        }
        {/* <h2 className="card__date">
        {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</h2>
            <ul className="card__points">
              <li className='card__points-item'>
                <div className="point">
                  <h3>Read book</h3>
                </div>
              </li>
              <li className='card__points-item'>
              <div className="point point_detailed">
                <h3>Changed hairstyle</h3>
                <p>It was very... description</p>
              </div>
              </li>
            </ul>
            <button className='card__add-button'>+</button>
          </div>
          <div className="card">
            <h2 className="card__date">
            {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</h2>
          </div>
          <div className="card">
            <h2 className="card__date">
            {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</h2>
          </div> */}
      </div>
    </main>
  );
}

export default Main;
