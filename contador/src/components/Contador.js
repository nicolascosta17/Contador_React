import './Contador.css';
import React, { useState } from 'react';

function Contador() {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };

  const decrementar = () => {
    setNumero(numero - 1);
  };

  const resetar = () => {
    setNumero(0);
  };

  return (
    <div className="contador-container">
      <h1 className="contador-titulo">Contador de Cliques</h1>
      
      <div className="contador-display">
        <h2 className="contador-numero">{numero}</h2>
      </div>

      <div className="contador-botoes">
        <button 
          onClick={decrementar}
          className="contador-btn"
        >
          - Diminuir
        </button>
        
        <button 
          onClick={resetar}
          className="contador-btn"
        >
          Resetar
        </button>
        
        <button 
          onClick={incrementar}
          className="contador-btn"
        >
          + Aumentar
        </button>
      </div>

      <div className="contador-info">
        <p>Cliques totais: {Math.abs(numero)}</p>
        <p>Status: {numero > 0 ? 'Positivo' : numero < 0 ? 'Negativo' : 'Zero'}</p>
      </div>
    </div>
  );
}

export default Contador;

