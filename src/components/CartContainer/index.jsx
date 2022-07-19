import React from 'react';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { useCartContext } from '../../context/CartContext';
import './cartContainer.css';

const CartContainer = () => {
	const { cart, totalPrice } = useCartContext();

	if (cart.length === 0) {
		return (
			<div className="cart-container">
				<h1>No hay elementos en el carrito</h1>
				<Link className="btn btn-compras" to="/">
					Hacer compras
				</Link>
			</div>
		);
	}

	return (
		<div className="cart-container">
			<h1>Cart</h1>
			<div className="item-cart-product">
				{cart.map((product) => (
					<ItemCart key={product.id} product={product} />
				))}
				<span>total: {totalPrice()}$</span>
			</div>
		</div>
	);
};

export default CartContainer;
