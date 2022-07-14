import React, { useState } from 'react';
import './Product.css';

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const products = [
  {
    id: '1',
    emoji: '🍦',
    name: 'ice cream',
    price: 5,
  },
  {
    id: '2',
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    id: '3',
    emoji: '🍉',
    name: 'watermelon',
    price: 4,
  },
];

const Product = () => {
  const [cart, setCart] = useState(products);
  const [total, setTotal] = useState(getTotal());

  function getTotal() {
    const totalAtual = products.reduce((total, item) => total + item.price, 0);

    return totalAtual;
  }

  function handleAdd() {
    let coffe = {
      id: '4',
      emoji: '☕',
      name: 'coffe',
      price: 5,
    };

    setCart([...products, coffe]);
    setTotal(getTotal() + coffe.price);
  }

  const handleRemoveAll = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.length} total items.</div>
      <div>Total: {total}</div>
      <div>
        {cart.forEach((product) => (
          <div key={product.id}>
            <div className="product">
              <span role="img" aria-label={product.name}>
                {product.emoji}
              </span>
            </div>
            <button>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemoveAll}>Remove All</button>
    </div>
  );
};

export default Product;
