import React from 'react';
import cart from './cart.svg';
import './CartWidget.css';

const CartWidget = () => {
	return (
		<div>
			<a href="./#" className="cart">
				<img src={cart} alt="Shopping Cart" width="50" />
				<h3>0</h3>
			</a>
		</div>
	);
};

export default CartWidget;
