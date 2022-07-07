import React from 'react';
import './NavMenu.css';
import { NavLink } from 'react-router-dom';

const menuItems = [
	{ id: 1, label: 'Categorias', route: '/' },
	{ id: 2, label: 'Ofertas', route: '/categoria/ofertas' },
	{ id: 3, label: 'Nuevo', route: '/categoria/nuevo' },
];

const NavMenu = () => {
	return (
		<ul className="navmenu_ul">
			{menuItems.map((item) => {
				return (
					<li key={item.id}>
						<NavLink to={item.route} alt="Categories menu links">
							{item.label}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};

export default NavMenu;
