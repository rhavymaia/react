import React, { useEffect, useState } from 'react';

const Contador = () => {
  let [contador, setContador] = useState(0);

  let [matriculado, setMatriculado] = useState(false);

  useEffect(() => {
    console.log('use effect - Carga inical da pagina');
  }, []);

  useEffect(() => {
    console.log('use effect - Mudou o contador');
    document.title = 'Contador: ' + contador;
  }, [contador]);

  function handleClick(event) {
    setContador(contador + 1);
  }

  return (
    <div>
      {contador != 0 && contador}
      <button onClick={handleClick}>Incrementar</button>

      {String(matriculado)}
      <button onClick={() => setMatriculado(!matriculado)}>
        Mudar matriculado
      </button>
    </div>
  );
};

export default Contador;
