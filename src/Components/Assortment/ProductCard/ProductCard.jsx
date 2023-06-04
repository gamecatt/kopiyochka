import React from 'react';
import './style.css'

function ProductCard() {
  return (
    <div className='product-card'>
      <div className="label">
        <p>В наявності</p>
        </div>
      <img src='/img/prod-1.png' alt='Освіжувач повітря' />
      <div className="prod-name"> Освіжувач повітря Glade 300 мл</div>
      <div className="prod-info">
        <div className="price">49.50грн</div>
        <div className="prod-action">
          <div className="add-icon icon"></div>
          <div className="like-icon icon"></div>
        </div>
      </div>
    </div>
  )
}

export {ProductCard};