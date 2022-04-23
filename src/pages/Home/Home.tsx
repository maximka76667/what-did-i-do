import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { CardInterface } from "../../interfaces";
import "./Home.sass";

function Home(props: { cards: CardInterface[], isLoggedIn: boolean }) {
  const { cards, isLoggedIn } = props;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Main cards={cards} />
      <Footer />
    </>
  );
}

export default Home;
