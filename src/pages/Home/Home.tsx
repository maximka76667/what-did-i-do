import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoginPopup from "../../components/LoginPopup";
import Main from "../../components/Main";
import { CardInterface, UserFunction } from "../../interfaces";
import "./Home.sass";

function Home(props: {
  cards: CardInterface[], isLoggedIn: boolean, onSignout: () => void, onLogin: UserFunction
}) {
  const {
    cards, isLoggedIn, onSignout, onLogin,
  } = props;

  const [isLoginPopupOpened, setIsLoginPopupOpened] = useState(false);

  function changeLoginPopupVisibility() {
    setIsLoginPopupOpened(!isLoginPopupOpened);
  }

  return (
    <>
      <Header
        onSignout={onSignout}
        onLoginButtonClick={changeLoginPopupVisibility}
        isLoggedIn={isLoggedIn}
      />
      <Main cards={cards} />
      <Footer />
      <LoginPopup isLoggedIn={isLoggedIn} onLogin={onLogin} isOpened={isLoginPopupOpened} />
    </>
  );
}

export default Home;
