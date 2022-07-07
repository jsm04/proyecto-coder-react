import React from 'react';
import Items from './Items';
import './itemlist.css';

// va a retornar la cantidad de items segun la prop de data que le pasemos
const ItemList = ({ data }) => {
	return (
		<div className="itemlist-container">
			{data.map((product) => (
				<Items
					key={product.id}
					id={product.id}
					name={product.name}
					price={product.price}
					image={product.image}
					stock={product.stock}
				/>
			))}
		</div>
	);
};

export default ItemList;
