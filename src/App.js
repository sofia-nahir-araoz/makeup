import React, { useState, useEffect} from 'react';

import './App.css';

import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const onHandlerCart = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* <Sidebar onClose={onHandlerCart} isOpen={isOpen} /> */}
      <Navbar numbersOfItems={12} onHandlerCart={onHandlerCart} />
      <ItemListContainer 
        greeting={<h1 className="text-center">Bienvenido/a a Make Up!</h1>}/>
    </>
  );
}

export default App;