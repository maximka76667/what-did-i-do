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

  function closeLoginPopup() {
    setIsLoginPopupOpened(false);
  }

  return (
    <>
      <Header
        onSignout={onSignout}
        changeLoginPopupVisibility={changeLoginPopupVisibility}
        isLoggedIn={isLoggedIn}
        closeLoginPopup={closeLoginPopup}
      />
      <Main cards={cards} changeLoginPopupVisibility={changeLoginPopupVisibility} />
      <Footer />
      <LoginPopup
        isLoggedIn={isLoggedIn}
        onLogin={onLogin}
        changeLoginPopupVisibility={changeLoginPopupVisibility}
        isOpened={isLoginPopupOpened}
      />
    </>
  );
}

export default Home;
