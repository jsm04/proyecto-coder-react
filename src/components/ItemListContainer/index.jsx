import React, { useState, useEffect } from 'react';
import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
} from 'firebase/firestore';
import { AiOutlineLoading } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './itemlistcontainer.css';

// item list container
const ItemListContainer = ({ containerTitle }) => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		const queryDb = getFirestore();
		const queryCollection = collection(queryDb, 'products');

		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where('category', '==', categoriaId)
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() }))
				)
			);
			setLoading(false);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() }))
				)
			);
		}
		setLoading(false);
	}, [categoriaId]);

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
