import React from 'react';
import './App.sass';
import Card from './components/Card';
import CardInterface from './types/CardInterface';

function App() {

  const cards: CardInterface[] = [
    {
      date: "10-04-2022",
      points: [
        {
          name: "Read book",
        }
      ],
    },
    {
      date: "11-04-2022",
      points: [
        {
          name: "Read book",
          description: "",
        },
        {
          name: "Changed hairstyle",
          description: "It was very... description",
        }
      ]
    },
  ]

  return (
    <div className="app">
      <header className="header"></header>
      <main className="content">
        <div className="content__container">
          {
            cards.reverse().map((card) => {
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
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
