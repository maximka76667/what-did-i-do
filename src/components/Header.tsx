import React, { useContext } from "react";
import { Link } from "react-router-dom"
import CurrentUserContext from "../contexts/CurrentUserContext";

function Header(props: { isLoggedIn: boolean }) {
  const { email } = useContext(CurrentUserContext);
  const { isLoggedIn } = props;
  return (
    <header className="header">
      {
        isLoggedIn ? (
          <>
            <p className="header__email">{email}</p>
            <button type="button" className="header__signout">Sign out</button>
          </>
        ) : (
          <>
            <button type="button" className="header__login">Login</button>
            <Link to="/signup" className="header__signup">Sign up</Link>
          </>
        )
      }
    </header>
  );
}

export default Header;
