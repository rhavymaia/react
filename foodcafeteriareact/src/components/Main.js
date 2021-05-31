import React from 'react';
import Food from './Food';

const cafe = {
  name: 'Café',
  image: './images/cafe.jpg',
  description: 'Descrição',
};

const suco = {
  name: 'Suco',
  image: './images/suco.jpg',
  description: 'Descrição',
};

const fritas = {
  name: 'Suco',
  image: './images/fritas.jpg',
  description: 'Descrição',
};

const foods = [cafe, suco, fritas];

const Main = () => {
  return (
    <>
      <h1 className="mt-5 text-center">Cardápio</h1>

      <div>
        <button
          type="button"
          name="addFood"
          className="btn btn-primary rounded-circle fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#foodModal"
        >
          +
        </button>
      </div>

      <div className="row" id="itens">
        {foods.map(function (food) {
          return <Food food={food} />;
        })}
      </div>
    </>
  );
};

export default Main;
