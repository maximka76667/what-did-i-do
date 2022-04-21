import React from "react";
import "./App.sass";
import { CardInterface } from "./interfaces";
import MainPage from "./pages/index";

function App() {
  const cards: CardInterface[] = [
    {
      _id: "1a",
      date: "10-4-2022",
      points: [
        {
          _id: "1x",
          name: "Read book",
        },
      ],
    },
    {
      _id: "2a",
      date: "11-4-2022",
      points: [
        {
          _id: "2x",
          name: "Read book",
          description: "",
        },
        {
          _id: "3x",
          name: "Changed hairstyle",
          description: "It was very... description",
        },
      ],
    },
  ].reverse();

  return (
    <div className="app">
      <MainPage cards={cards} />
    </div>
  );
}

export default App;
