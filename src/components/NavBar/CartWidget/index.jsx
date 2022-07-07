import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {
	return (
		<div>
			<div className="cart">
				<FaShoppingCart className="shooping-cart-icon" />
				<h3>0</h3>
			</div>
		</div>
	);
};

export default CartWidget;
