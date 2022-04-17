import React from 'react';
import './App.sass';
import CardInterface from './interfaces/CardInterface';
import { MainPage } from './pages/index';

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
  ].reverse();

  return (
    <div className="app">
      <MainPage cards={cards} />
    </div>
  );
}

export default App;
