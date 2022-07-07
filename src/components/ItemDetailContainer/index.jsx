import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';
import ItemDetail from './ItemDetail';
import products from '../../utils/fakeData';
import './itemdetailcontainer.css';

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const { detalleId } = useParams();

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(products);
				setLoading(false);
			}, 5000);
		});

		getData.then((res) => setData(res.find((product) => product.id === parseInt(detalleId))));
	}, [detalleId]);

	if (isLoading) {
		return (
			<div className="loading-container">
				<AiOutlineLoading className="loading" />
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
