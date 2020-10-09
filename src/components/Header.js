import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
	return (
		<header>
			<nav className='nav'>
				<NavLink exact to='/'>HOME</NavLink>
				<NavLink to='/about'>ABOUT</NavLink>
				<NavLink to='/contact'>CONTACT</NavLink>
			</nav>
		</header>
	);
}

export default Header;