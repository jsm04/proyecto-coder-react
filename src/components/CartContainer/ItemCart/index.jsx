import React from 'react';
import { useCartContext } from '../../../context/CartContext';
import './itemCart.css';

const ItemCart = ({ product }) => {
	const { removeProduct } = useCartContext();
	return (
		<div className="item-cart">
			<img src={product.image} alt="product " />
			<div className="item-cart-content">
				<h3>Titulo: {product.name}</h3>
				<p>Cantidad: {product.quantity}</p>
				<p>Precio u.: ${product.price}</p>
				<p>Subtotal:${product.quantity * product.price}</p>
				<button className="btn" onClick={() => removeProduct(product.id)}>
					eliminar
				</button>
			</div>
		</div>
	);
};

export default ItemCart;
