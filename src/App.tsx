import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.sass";
import { useNavigate } from "react-router";
import CurrentUserContext from "./contexts/CurrentUserContext";
import auth from "./utils/auth";
import mainApi from "./utils/mainApi";
import { CardInterface, UserFunction, UserInterface } from "./interfaces";
import { Home, Login, Register } from "./pages";

// To do
// rewrite all promises to async/await

function App() {
  const [currentUser, setCurrentUser] = useState<Omit<UserInterface, "password">>({ email: "", name: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState<CardInterface[]>([])

  const navigate = useNavigate();

  function handleError(error: unknown) {
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
        navigate("/");
        mainApi.getCards()
          .then(({ cards: serverCards }: { cards: CardInterface[] }) => {
            const currentUserCards = serverCards.filter((card) => card.owner === res.user._id);
            setCards(currentUserCards);
          })
      })
      .catch((err) => handleError(err));
  }

  // Login
  const handleLogin: UserFunction = async (userData) => {
    try {
      const data = await auth.login(userData)
      if (data.token) handleAuth(data.token);
    } catch (err) {
      handleError(err)
    }
    // handleInfo(true, MESSAGES.auth);
  }

  const handleRegister = async (userData: UserInterface) => {
    await auth.register(userData);
    navigate("/");
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
          // handleInfo(true, MESSAGES.logout);
          navigate("/");
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
          <Route path="/signup" element={<Register onRegister={handleRegister} />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
