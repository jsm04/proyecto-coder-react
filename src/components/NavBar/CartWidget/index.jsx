import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
	const { totalProducts } = useCartContext();

	return (
		<div>
			<div className="cart">
				<FaShoppingCart className="shooping-cart-icon" />
				<h3>{totalProducts() || ''}</h3>
			</div>
		</div>
	);
};

export default CartWidget;
