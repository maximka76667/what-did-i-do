import React, { useEffect, useState } from "react";
import "./App.sass";
import CurrentUserContext from "./contexts/CurrentUserContext";
import { CardInterface, UserInterface } from "./interfaces";
import MainPage from "./pages";

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

  const [currentUser, setCurrentUser] = useState<UserInterface>({ email: "", name: "" });

  useEffect(() => {
    setCurrentUser({ email: "321@gmail.com", name: "Maxim" })
  })

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <MainPage cards={cards} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
