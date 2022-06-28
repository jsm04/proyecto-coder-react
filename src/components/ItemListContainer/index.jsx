import React from 'react';
import './itemlistcontainer.css';
import ItemCount from '../ItemCount';

const ItemListContainer = ({ SearchTitle }) => {
	return (
		<>
			<h3 className="itemlistcontainer-h3">{ SearchTitle }</h3>
			<div className="items-container">
				<ItemCount stock={10} name="Celular Huawei a99" />
				<ItemCount stock={5} name="Celular IPhone 12 pro" />
				<ItemCount stock={4} name="Celular Motorola g22" />
			</div>
		</>
	);
};

export default ItemListContainer;
