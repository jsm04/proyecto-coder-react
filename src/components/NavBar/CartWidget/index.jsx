import React from 'react';
import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
	return (
		<div>
			<a href="./#" className="cart">
				<FaShoppingCart className="shooping-cart-icon" />
				<h3>0</h3>
			</a>
		</div>
	);
};

export default CartWidget;
