import React from 'react';
import CartWidget from './CartWidget';
import NavMenu from './NavMenu';
import './navbar.css';

const NavBar = () => {
	return (
		<>
			<nav className="navbar">
				<h1>E-Commerce</h1>
				<NavMenu />
				<form>
					<input
						type="text"
						placeholder="Busca productos, marcas y mas..."
					/>
				</form>
				<CartWidget />
			</nav>
		</>
	);
};

export default NavBar;
