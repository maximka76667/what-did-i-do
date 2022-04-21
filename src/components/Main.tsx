import React from "react";
import Card from "./Card";
import { CardInterface } from "../interfaces";

function Main(props: { cards: CardInterface[] }) {
  const { cards } = props;

  const today = new Date();

  const todayCard = {
    _id: "0",
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
      </div>
    </main>
  );
}

export default Main;
