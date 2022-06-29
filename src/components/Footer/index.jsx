import React from 'react';
import './footer.css';
import { IoAirplane } from 'react-icons/io5';

const Footer = () => {
	return (
		<footer>
			<IoAirplane className="icon" />
			<ul>
				<li>This could be a link somewhere</li>
				<li>About us</li>
				<li>Info and legals</li>
				<li>Another link</li>
				<li>Work with us</li>
				<li>Some other stuff</li>
			</ul>
		</footer>
	);
};

export default Footer;
