import React, { MouseEventHandler, useContext } from "react";
import { Link } from "react-router-dom"
import CurrentUserContext from "../contexts/CurrentUserContext";

function Header({ isLoggedIn, onSignout, onLoginButtonClick }: {
  isLoggedIn: boolean, onSignout: () => void, onLoginButtonClick: () => void
}) {
  const { email } = useContext(CurrentUserContext);

  const handleSignout: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    onSignout();
  }

  const handleLoginButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    onLoginButtonClick();
  }

  return (
    <header className="header">
      {
        isLoggedIn ? (
          <>
            <p className="header__email">{email}</p>
            <button type="button" className="header__signout" onClick={handleSignout}>Sign out</button>
          </>
        ) : (
          <>
            <button type="button" className="header__login" onClick={handleLoginButtonClick}>Login</button>
            <Link to="/signup" className="header__signup">Sign up</Link>
          </>
        )
      }
    </header>
  );
}

export default Header;
