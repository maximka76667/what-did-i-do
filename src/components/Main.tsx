import React, { useContext } from "react";
import Card from "./Card";
import { MainInterface } from "../interfaces";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ cards }: MainInterface) {
  const { name } = useContext(CurrentUserContext);
  const today = new Date();

  const todayCard = {
    _id: "0",
    points: [],
    date: `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`,
  };

  return (
    <main className="content">
      <h1 className="content__heading">
        How was your day
        {name ? `, ${name}` : ""}
        ?
      </h1>
      <p className="content__subheading">Would you like to share with me your achievements today?</p>
      <div className="content__container">
        {
          cards.filter((card) => card.date === todayCard.date).length > 0 ? "" : <Card card={todayCard} key={todayCard.date} todayCard />
        }
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
