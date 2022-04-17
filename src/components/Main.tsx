import React from 'react'
import Card from './Card'
import { CardInterface } from '../interfaces';

const Main = (props: { cards: CardInterface[] }) => {
  const { cards } = props;

  return (
    <main className="content">
      <div className="content__container">
        {
          cards.map((card) => {
            return (
              <Card card={card} key={card.date} />
            )
          })
        }
        {/* <h2 className="card__date">{`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</h2>
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
            <h2 className="card__date">{`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</h2>
          </div>
          <div className="card">
            <h2 className="card__date">{`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</h2>
          </div> */}
      </div>
    </main>
  )
}

export default Main;