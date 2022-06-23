import React from 'react';
import './itemlistcontainer.css';

const ItemListContainer = ({ greeting }) => {
	return (
		<>
			<h3 className="itemlistcontainer-h3">{greeting}</h3>
		</>
	);
};

export default ItemListContainer;
