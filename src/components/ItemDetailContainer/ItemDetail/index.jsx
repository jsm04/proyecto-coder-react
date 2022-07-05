import React from 'react';
import './itemdetail.css';

// item list container

const ItemDetail = ({ data }) => {
	console.log({ data });
	return (
		<div className="items-detail-container">
			<img src={data.image} alt="Imagen descriptiva del producto." />
			<section>
				<h3>{data.name}</h3>
				<span>{data.price}</span>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Inventore, repudiandae nemo officia explicabo aliquam vel
					quia sint et quasi? Sapiente velit alias eius perferendis,
					cum ipsam doloremque? Qui, rerum repellendus..
				</p>
				<span>stock: {data.stock}</span>
			</section>
		</div>
	);
};

export default ItemDetail;
