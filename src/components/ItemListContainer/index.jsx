import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';

// fake data
const products = [
	{
		id: 1,
		name: 'Product 1',
		price: '$40000',
		image: 'https://picsum.photos/id/119/300/300',
		stock: 20,
	},
	{
		id: 2,
		name: 'Product 2',
		price: '$50000',
		image: 'https://picsum.photos/id/124/300/300',
		stock: 0,
	},
	{
		id: 3,
		name: 'Product 3',
		price: '$35000',
		image: 'https://picsum.photos/id/250/300/300',
		stock: 4,
	},
];

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

// const itemsList = [
// 	{ id: 1, name: 'Celular Huawei a99', stock: 10 },
// 	{ id: 2, name: 'Celular IPhone 12 pro', stock: 5 },
// 	{ id: 3, name: 'Celular Motorola g22', stock: 0 },
// ];

// previous code
// {
// 	itemsList.map((item) => {
// 		return (
// 			<ItemCount
// 				key={item.id}
// 				name={item.name}
// 				stock={item.stock}
// 				onAdd={onAdd}
// 			/>
// 		);
// 	});
// }
