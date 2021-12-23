import React from 'react';

const UseStateExp = () => {
  //let i = 0;
  // let values = useState(0);
  // let incremento = values[0];
  // const setIncremento = values[1];
  let [incremento, setIncremento] = React.useState(0);

  const incrementar = function () {
    let somar = () => incremento + 1;
    setIncremento(somar);
    console.log(incremento);
  };

  return (
    <>
      <span>{incremento}</span>
      <button onClick={incrementar}>Incrementar</button>
    </>
  );
};

export default UseStateExp;
