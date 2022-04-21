import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Header() {
  const { email } = useContext(CurrentUserContext);
  return (
    <header className="header">
      <p>{email}</p>
    </header>
  );
}

export default Header;
