import React from "react";

import Navbar from './Navbar';

import "./styles/header.css";

const Header = () => {
	return (
		<div className="header flexrow">
			<div className="logo flewrow">
				<p>NO MY JAM</p>
			</div>
			<div className="menu flexrow">
					<Navbar />
			</div>
		</div>
	);
};

export default Header;
