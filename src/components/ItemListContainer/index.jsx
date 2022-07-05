import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import ItemList from './ItemList';
import products from '../../utils/fakeData';

// item list container
const ItemListContainer = ({ SearchTitle }) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(products);
			}, 5000);
		});
		getData.then((res) => setData(res));
	}, []);

	const onAdd = (quantity) => {
		alert(
			`${quantity} ${
				quantity > 1 ? 'items' : 'item'
			} agregado al carrito de compras.`
		);
	};

	return (
		<>
			<h3 className="itemlist-h3">{SearchTitle}</h3>
			<div className="items-container">
				<ItemList data={data} />
			</div>
		</>
	);
};

export default ItemListContainer;
