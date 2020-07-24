import React from "react";

import Navbar from './Navbar';
import piment from '../img/piment.png'

import "./styles/header.css";

const Header = () => {
	return (
		<div className="header flexrow">
			<div className="logo flewrow">
				<img src={piment} alt="un piment qui court" />
			</div>
			<div className="menu flexrow">
					<Navbar />
			</div>
		</div>
	);
};

export default Header;
