import React from 'react';

const Food = (props) => {
  return (
    <div>
      <div className="col">
        <div className="card">
          <img
            src={props.food.image}
            className="card-img-top"
            alt="..."
            width="30%"
          />
          <div className="card-body">
            <h5 className="card-title">{props.food.name}</h5>
            <p className="card-text">{props.food.description}</p>
            <a href="#" className="btn btn-primary">
              Adicionar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
