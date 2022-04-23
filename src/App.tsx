import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.sass";
import CurrentUserContext from "./contexts/CurrentUserContext";
import { CardInterface, UserInterface } from "./interfaces";
import { Home, Login, Signup } from "./pages";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setCurrentUser({ email: "321@gmail.com", name: "Maxim" });
    setIsLoggedIn(true);
  })

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Router>
          <Routes>
            <Route index element={<Home isLoggedIn={isLoggedIn} cards={cards} />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
