import React, { useState } from "react";
import {
  Header, Footer, LoginPopup, Main,
} from "../../components";
import { HomeInterface } from "../../interfaces";
import "./Home.sass";

function Home({
  cards, isLoggedIn, onSignout, onLogin,
}: HomeInterface) {
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
