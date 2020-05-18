import React from 'react';
import './App.css';
import Button from './components-ui/button/Button';
import UnorderedList from './components-ui/unordered-list/UnorderedList';
import {sumaArray} from './sumaArray';

const colors = ['Amarillo', 'Azul', 'Rojo', 'Verde'];

function App() {
  const onButtonClick = () => {
    console.log('Button clicked');
  }

  const lista1 = [1, 4, 3, 0];
	const lista2 = [1, 2, [5, 8], 4];
	const lista3 = [0, [6, 2], null, 7, 1];

  return (
    <div className="appContainer">
      <Button content="CHECKOUT" onButtonClick={onButtonClick()}></Button>
      <UnorderedList list={colors}></UnorderedList>
      <p>Suma array 1: {sumaArray(lista1)}</p>
      <p>Suma array 2: {sumaArray(lista2)}</p>
      <p>Suma array 3: {sumaArray(lista3)}</p>
    </div>
  );
}

export default App;
