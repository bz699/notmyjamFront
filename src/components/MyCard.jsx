import React from "react";

import { Button } from "react-bootstrap";

import "../App.css";
import "./styles/cards.css";

const MyCard = () => {
	return (
		<div className="wrapper flexColumn">
			
			<div className="myActions flexrow">
					<Button variant="send">envoyer</Button>
					<Button variant="modify">modifer</Button>
				</div>

			<div className="myCardForm flexrow">
				<div className='cardTitle flexrow'>
					<div>Name</div>
					<div>Diet</div>
				</div>
			</div>


			<div className="myCardForm">
					<div className="foodDetails">Food Details</div>
			</div>

			<div className="myCardForm">				
					<div className="foodDetails">User Details</div>
			</div>

			<div className="myCardForm">
				<div className="myCollection">MyCollection</div>
			</div>

			</div>

	);
};

export default MyCard;
