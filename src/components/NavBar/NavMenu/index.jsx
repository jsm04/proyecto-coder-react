import React from 'react';
import './NavMenu.css';

const menuItems = [
	{ id: 1, label: 'Categorias' },
	{ id: 2, label: 'Ayuda' },
	{ id: 3, label: 'Historial' },
];

const NavMenu = () => {
	return (
		<ul className="navmenu_ul">
			{menuItems.map(item => {
				return (
					<li key={item.id}>
						<a href="/" alt="Categories menu links">
							{item.label}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default NavMenu;
