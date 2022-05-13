import React from 'react';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import AppRouter from './routing';

const App = (): JSX.Element => {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
