import React from 'react';
import './App.css';
import AppRouter from './routing';
import Header from './components/Header/Header';
import Footer from './components/Footer';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
