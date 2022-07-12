import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './itemdetail.css';

const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);

	const onAdd = (quantity) => {
		alert(`${quantity} ${quantity > 1 ? 'items' : 'item'} agregado al carrito de compras.`);
		setGoToCart(true);
	};

	return (
		<div className="items-detail-container">
			<img src={data.image} alt="Imagen descriptiva del producto." />
			<section>
				<h3>{data.name}</h3>
				<span>{data.price}</span>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, repudiandae nemo officia
					explicabo aliquam vel quia sint et quasi? Sapiente velit alias eius perferendis, cum ipsam
					doloremque? Qui, rerum repellendus..
				</p>
				{goToCart ? (
					<Link to="/cart" className="item-to-cart">
						Terminar compra
					</Link>
				) : (
					<ItemCount stock={data.stock} name={data.name} onAdd={onAdd} />
				)}
			</section>
		</div>
	);
};

export default ItemDetail;
