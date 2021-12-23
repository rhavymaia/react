import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login!');
    navigate('/usuario/rhavy?tipo=1');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Entrar</button>
      </form>
    </>
  );
};

export default Login;
