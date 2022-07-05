import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import ItemList from './ItemList';
import products from '../../utils/fakeData';
import { AiOutlineLoading } from 'react-icons/ai';

// item list container
const ItemListContainer = ({ SearchTitle }) => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(products);
				setLoading(false);
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

	if (isLoading) {
		return (
			<div className="loading-container">
				<AiOutlineLoading className="loading" />;
			</div>
		);
	}

	return (
		<>
			<h3 className="itemlist-h3">{SearchTitle}</h3>
			<div className="itemslist-container">
				<ItemList data={data} />
			</div>
		</>
	);
};

export default ItemListContainer;
