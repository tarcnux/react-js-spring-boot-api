import React, {useState} from 'react';
import Header from './Header';
import Header2 from './Header2';

export default function App() {
  //Array [valor_original, função de manipulação de valor]
  const [contador, setContador] = useState(0);
  
  function incrementar(){
    setContador(contador+1);
  }

  return (
    <>
      <Header title="React REST client doTatá"/>
      <Header2>
        Contador: {contador}
      </Header2>
      <h1>Aloha REST!</h1>
      <button onClick={incrementar}>Adicinar</button>
    </>
  );
}

