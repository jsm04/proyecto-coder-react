import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ name, stock }) => {
	const [amount, setAmount] = useState(1);

	const buttonIncrease = () => {
		if (amount < stock) {
			setAmount(amount + 1);
		}
	};

	const buttonDecrease = () => {
		if (amount <= stock && amount > 1) {
			setAmount(amount - 1);
		}
	};

	return (
		<section className="item-count-container">
			<h3 className="item-count-title">{name || 'Undefined'} </h3>
			<div className="item-count-body">
				<button onClick={buttonDecrease} className="minus">
					-
				</button>
				<span className="counter">{amount}</span>
				<button onClick={buttonIncrease} className="plus">
					+
				</button>
			</div>
			<span className="stock">En stock: {stock}</span>
			<button className="item-count-to-cart">
				Agregar al carrito
			</button>
		</section>
	);
};

export default ItemCount;
