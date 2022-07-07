import React from 'react';
import CartWidget from './CartWidget';
import NavMenu from './NavMenu';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<nav className="navbar">
				<NavLink to="/">
					<h1>E-Commerce</h1>
				</NavLink>
				<NavMenu />
				<form>
					<input type="text" placeholder="Busca productos, marcas y mas..." />
				</form>
				<CartWidget />
			</nav>
		</>
	);
};

export default NavBar;
