import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import { CardInterface } from '../../interfaces';
import './MainPage.sass';

function MainPage(props: { cards: CardInterface[] }) {
  const { cards } = props;

  return (
    <>
      <Header />
      <Main cards={cards} />
      <Footer />
    </>
  );
}

export default MainPage;
