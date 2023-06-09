import React from 'react';
import './ProductCard.css'

function ProductCard({ data }) {
  return (
    <div className='product-card'>
      <div className="label">
        <p>{data.stock}</p>
        </div>
      <img src={data.url} alt={data.name} />
      <div className="prod-name">{data.name}</div>
      <div className="prod-info">
        <div className="price">{data.price} грн.</div>
        <div className="prod-action">
          <div className="add-icon icon"></div>
          <div className="like-icon icon"></div>
        </div>
      </div>
    </div>
  )
}

export {ProductCard};