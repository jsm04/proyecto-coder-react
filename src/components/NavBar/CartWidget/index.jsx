import React from 'react';
import cart from './cart.svg';
import './CartWidget.css';

const CartWidget = () => {
	return (
		<div class="c">
			<a href="./#" className="cart">
				<img src={cart} alt="Shopping Cart" width="67" />
				<h3>Items</h3>
			</a>
		</div>
	);
};

export default CartWidget;
