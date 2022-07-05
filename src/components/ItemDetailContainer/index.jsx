import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import './itemdetailcontainer.css';
import products from '../../utils/fakeData';
import { AiOutlineLoading } from 'react-icons/ai';

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(products);
				setLoading(false);
			}, 7000);
		});

		getData.then((res) => setData(res[2]));
	}, []);

	if (isLoading) {
		return (
			<div className="loading-container">
				<AiOutlineLoading className="loading" />;
			</div>
		);
	}

	return (
		<>
			<h3 className="itemlist-h3">Detalles</h3>
			<div className="items-container">
				<ItemDetail data={data} />
			</div>
		</>
	);
};

export default ItemDetailContainer;
