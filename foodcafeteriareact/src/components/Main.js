import React from 'react';

const food = {
  name: 'Café',
  image: 'image/cafe.jpg',
  description: 'Descrição',
};

const Main = () => {
  return (
    <div>
      <div>
        <img src={food.image} class="card-img-top" alt="..." />
        <div>
          <h5>{food.name}</h5>
          <p>{food.description}</p>
          <a href="#">Adicionar</a>
        </div>
      </div>
    </div>
  );
};

export default Main;
