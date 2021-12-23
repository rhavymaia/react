import React, { useState, useEffect } from 'react';

const UseEffectExp = () => {
  let [incremento, setIncremento] = useState(0);
  let [produtos, setProdutos] = useState([]);

  // useEffect(param1, param2);
  // quando houver qualquer modificação de estado.
  // useEffect(() => {
  //   console.log('Entrou no useEffect! A qualquer momento!');
  // });

  // quando a página for carregada.
  useEffect(() => {
    // carregar lista de produtos.
    const response = fetch(
      'https://ranekapi.origamid.dev/json/api/produto/',
    ).then((response) => {
      return response.json();
    });

    response.then((json) => {
      setProdutos(json);
    });
  }, []);

  useEffect(() => {
    document.title = 'O total de itens é: ' + incremento;
    setProdutos([...produtos]);
  }, [incremento, produtos]);

  const handleClick = function () {
    let somar = () => incremento + 1;
    setIncremento(somar);
  };

  return (
    <>
      <span>{incremento}</span>
      <button onClick={handleClick}>Incrementar</button>

      <ul>
        {produtos.map((produto) => (
          <li>{produto.nome}</li>
        ))}
      </ul>
    </>
  );
};

export default UseEffectExp;
