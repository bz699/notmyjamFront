import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../App.css";
import "./styles/cards.css";

import Card from "./Card";

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
  
  console.log(users)

	return (
		<div className="wrapper">
        {users && users.map((user) => 
          <Card user= { user } />
        )}
		</div>
	);
};

export default Cards;
