import React from 'react';
import './App.css';
import AppRouter from './routing';
import Header from './components/Header/Header';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
