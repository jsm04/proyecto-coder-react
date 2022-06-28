import React from 'react';
import './itemlistcontainer.css';
import ItemCount from '../ItemCount';

const itemsList = [
	{ id: 1, name: 'Celular Huawei a99', stock: 10 },
	{ id: 2, name: 'Celular IPhone 12 pro', stock: 5 },
	{ id: 3, name: 'Celular Motorola g22', stock: 0 },
];

const ItemListContainer = ({ SearchTitle }) => {
	const onAdd = (quantity) => {
		alert(
			`${quantity} ${
				quantity > 1 ? 'items' : 'item'
			} agregado al carrito de compras.`
		);
	};

	return (
		<>
			<h3 className="itemlistcontainer-h3">{SearchTitle}</h3>
			<div className="items-container">
				{itemsList.map((item) => {
					return (
						<ItemCount
							key={item.id}
							name={item.name}
							stock={item.stock}
							onAdd={onAdd}
						/>
					);
				})}
			</div>
		</>
	);
};

export default ItemListContainer;
