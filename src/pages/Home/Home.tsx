import React, { KeyboardEventHandler, useState } from "react";
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

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.code === "Escape") {
      e.preventDefault();
      closeLoginPopup();
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="home"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
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
        closeLoginPopup={closeLoginPopup}
        isOpened={isLoginPopupOpened}
      />
    </div>
  );
}

export default Home;
