import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../App.css";
import "./styles/cards.css";

import Card from "./Card";

import './styles/cards.css'

const Cards = () => {
	const [users, setUsers] = useState();

	// get all users
	const getUsersData = () => {
		const url = "http://localhost:8000/api/users";
		Axios.get(url)
			.then((response) => response.data)
			.then((data) => setUsers(data));
	};

	// fill table with shops data
	useEffect(() => {
		getUsersData();
	}, []);

	return (
		<>
			<div className="wrapper">
				<div className="cardsContainer wrap">
				{users && users.map((user) => <Card user={user} />)}
				</div>
			</div>
		</>
	);
};

export default Cards;
