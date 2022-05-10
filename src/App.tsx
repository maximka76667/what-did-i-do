import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.sass";
import CurrentUserContext from "./contexts/CurrentUserContext";
import auth from "./helpers/auth";
import mainApi from "./helpers/mainApi";
import { CardInterface, UserFunction, UserInterface } from "./interfaces";
import { Home, Login, Signup } from "./pages";

function App() {
  const [currentUser, setCurrentUser] = useState<UserInterface>({ email: "", name: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState<CardInterface[]>([])

  function handleError(error: Error) {
    // eslint-disable-next-line no-console
    console.log(error);
    // handleInfo(false, MESSAGES.defaultError)
  }

  // Auth
  function handleAuth(token: string) {
    // const requestedPathname = location.pathname;
    auth.getEmail(token)
      .then((res) => {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
        mainApi.changeToken(token);
        setCurrentUser(res.user);
        // if (requestedPathname === "/signin" ||
        // requestedPathname === "/signup") props.history.push("/movies")
        // else props.history.push(requestedPathname);
        mainApi.getCards()
          .then(({ cards: serverCards }: { cards: CardInterface[] }) => {
            const currentUserCards = serverCards.filter((card) => card.owner === res.user._id);
            setCards(currentUserCards);
          })
      })
      .catch((err) => handleError(err));
  }

  // Login
  const handleLogin: UserFunction = ({ email, password }) => {
    auth.login({ email, password } as UserInterface)
      .then((data) => {
        if (data.token) handleAuth(data.token);
        // handleInfo(true, MESSAGES.auth);
      })
      .catch((err) => handleError(err))
  }

  function handleSignout() {
    const token = localStorage.getItem("token")
    if (token) {
      auth.signout(token)
        .then(() => {
          setIsLoggedIn(false);
          mainApi.changeToken("");
          setCurrentUser({ email: "", name: "" });
          localStorage.removeItem("token");
          setCards([]);
          // localStorage.removeItem('movies');
          // props.history.push('/');
          // handleInfo(true, MESSAGES.logout);
        })
        .catch((err) => handleError(err));
    }
  }

  function checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
      handleAuth(token);
    }
  }

  useEffect(() => {
    checkToken();
  }, [])

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Router>
          <Routes>
            <Route
              index
              element={(
                <Home
                  onSignout={handleSignout}
                  isLoggedIn={isLoggedIn}
                  cards={cards}
                  onLogin={handleLogin}
                />
              )}
            />
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
