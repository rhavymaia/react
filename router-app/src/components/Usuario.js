import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Usuario = () => {
  const params = useParams();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  let tipo = urlParams.get('tipo');

  return (
    <>
      <h1>Usuário! {params.id}</h1>
      <h2>{tipo}</h2>
    </>
  );
};

export default Usuario;
