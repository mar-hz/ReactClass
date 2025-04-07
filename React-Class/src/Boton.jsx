import React from 'react'

const Boton = ({ texto, onClick }) => {
  return (
    <button onClick={onClick}>
      <h1>{texto}</h1>
    </button>
  );
}

export default Boton