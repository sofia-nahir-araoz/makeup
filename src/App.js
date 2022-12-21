import React, { useState} from 'react';

import './App.css';

import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import Router from './router';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const [showProducts, setShowProducts] = useState(false);

  const onHandlerCart = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* <Sidebar onClose={onHandlerCart} isOpen={isOpen} /> */} 
      <Navbar numbersOfItems={12} onHandlerCart={onHandlerCart} />
      <ItemListContainer 
        greeting={<h1 className="text-center">Bienvenido/a a <span className="span-make">Make</span>Up!</h1>}/>
      <Router/>
    </>
  );
}

export default App;