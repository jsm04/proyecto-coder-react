import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { AiOutlineLoading } from 'react-icons/ai';
import ItemDetail from './ItemDetail';
import './itemdetailcontainer.css';

const ItemDetailContainer = ({ containerTitle }) => {
	const [data, setData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const { detalleId } = useParams();

	useEffect(() => {
		const queryDb = getFirestore();
		const queryDoc = doc(queryDb, 'products', detalleId);
		getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
		setLoading(false);
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
			<h3 className="itemlist-h3">{containerTitle}</h3>
			<div className="items-container">
				<ItemDetail data={data} />
			</div>
		</>
	);
};

export default ItemDetailContainer;
