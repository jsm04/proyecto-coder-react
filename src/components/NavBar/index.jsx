import React from 'react';
import CartWidget from './CartWidget';
import NavMenu from './NavMenu';
import './navbar.css';

const NavBar = () => {
	return (
		<nav className="navbar">
			<h1>E-Commerce</h1>
			<NavMenu />
			<CartWidget />
		</nav>
	);
};

export default NavBar;
