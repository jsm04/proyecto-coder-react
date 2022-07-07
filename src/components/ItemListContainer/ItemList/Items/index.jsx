import React from 'react';
import './items.css';

const Items = ({ id, name, stock, image, price }) => {
	return (
		<section className="item-container">
			<h3 className="item-title">{name || '...'} </h3>
			<div className="item-description">
				<img className="item-img" src={image} alt="" />
				<h4 className="item-subtitle">Lorem ipsum dolor sit amet.</h4>
			</div>
			<div className="item-body"></div>
			<span className="item-price-tag">{price}</span>
			<button className="item-details">Ver detalle del producto</button>
			<div className="stock">En stock: {stock}</div>
		</section>
	);
};

export default Items;
