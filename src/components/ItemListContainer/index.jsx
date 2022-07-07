import React, { useState, useEffect } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import products from '../../utils/fakeData';
import './itemlistcontainer.css';

// item list container
const ItemListContainer = ({ containerTitle }) => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();
	console.log(categoriaId);

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(products);
				setLoading(false);
			}, 1000);
		});

		if (categoriaId) {
			getData.then((res) => setData(res.filter((categoryName) => categoryName.category === categoriaId)));
		} else {
			getData.then((res) => setData(res));
		}
	}, [categoriaId]);

	// const onAdd = (quantity) => {
	// 	alert(`${quantity} ${quantity > 1 ? 'items' : 'item'} agregado al carrito de compras.`);
	// };

	if (isLoading) {
		return (
			<div className="loading-container">
				<AiOutlineLoading className="loading" />
			</div>
		);
	}

	return (
		<>
			<h3 className="itemlist-h3">{containerTitle}</h3>
			<div className="itemslist-container">
				<ItemList data={data} />
			</div>
		</>
	);
};

export default ItemListContainer;
