import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import NavMenu from './NavMenu';
import './navbar.css';

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
				<NavLink to="/cart">
					<CartWidget />
				</NavLink>
			</nav>
		</>
	);
};

export default NavBar;
