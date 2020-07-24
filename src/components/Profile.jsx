import React, { useState, useEffect } from "react";
import { Button, Col, Form, Table } from "react-bootstrap";
import Axios from "axios";

import "../App.css";
import "./styles/cards.css";

const Profile = () => {
	const [profile, setProfile] = useState([]);

	const currentUserId = localStorage.getItem("currentUserId");

	// get Current User datas
	const getCurrentUserData = () => {
		const url = `http://localhost:8000/api/users/${currentUserId}`;
		Axios.get(url)
			.then((response) => response.data)
			.then((data) => setProfile(data[0]));
	};

	useEffect(() => {
		getCurrentUserData();
	}, []);

	// modify Current User datas

	const handleTextChange = (event) => {
		const { name, value } = event.target;
		setProfile({ ...profile, [name]: value });
	};

	const updateUser = () => {
		const url = `http://localhost:8000/api/users/${currentUserId}`;
		Axios.put(url, profile).then(alert("Le profil a bien été mis à jour"));
	};

	// modify diet name
	const [diets, setDiets] = useState([]);

	const getDietsData = () => {
		const url = "http://localhost:8000/api/diets";
		Axios.get(url)
			.then((response) => response.data)
			.then((data) => setDiets(data));
	};

	useEffect(() => {
		getDietsData();
	}, []);

	const handleChangeDiet = (event) => {
		const { name, value } = event.target;
		setProfile({ ...profile, [name]: value });
	};

	// GET FOOD
	const [foodList, setFoodList] = useState([]);

	const getFoodList = () => {
		const url = `http://localhost:8000/api/users/${currentUserId}/foodList`;
		Axios.get(url)
			.then((response) => response.data)
			.then((data) => setFoodList(data));
	};

	useEffect(() => {
		getFoodList();
	}, []);

	// get food name
	const [foods, setFoods] = useState([]);

	const getFoodData = () => {
		const url = `http://localhost:8000/api/foods`;
		Axios.get(url)
			.then((response) => response.data)
			.then((data) => setFoods(data));
	};

	useEffect(() => {
		getFoodData();
	}, []);

	const getFoodName = (foodId) => {
		const foundFood = foods.find((food) => food.id === foodId);
		return foundFood ? foundFood.item : "-_o";
	};

	// Add/Delete Food
	const [newFood, setNewFood] = useState();

	const addFood = () => {
		const url = `http://localhost:8000/api/foods`;
		Axios.post(url)
			.then((response) => response.data)
			.then((data) => setNewFood.id);
	};

	const addUser_Food = () => {
		const url = `http://localhost:8000/api/users/${currentUserId}/foods/${newFood.id}`;
	};

	const deleteFood = (id) => {
		const url = `http://localhost:8000/api/users/foodList/${id}`;
		Axios.delete(url)
			.then((response) => response.data)
			.finally(() => getFoodList());
	};

	console.log(profile);

	if (profile) {
		return (
			<div>
				<div className="wrapper flexColumn">
					<Form
						onSubmit={() => {
							updateUser();
						}}
					>
						<div className="myActions flexrow">
							<Button variant="send">envoyer</Button>
						</div>

						<div className="myCardForm">
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Control
										type="text"
										name="name"
										value={profile.name}
										onChange={handleTextChange}
										placeholder={profile.name}
									/>
								</Form.Group>
								<Form.Group as={Col}>
									<Form.Control
										as="select"
										name="diet_id"
										value={profile.diet_id}
										onChange={handleChangeDiet}
									>
										<option value="choose">Choisir...</option>
										{diets.map((diet) => (
											<option value={diet.id}>{diet.name}</option>
										))}
									</Form.Control>
								</Form.Group>
							</Form.Row>
							<Button variant="modify" type="submit">
								modifer
							</Button>
						</div>
					</Form>

					<div className="myCardForm">
						<Form.Group>
							<Table>
								<thead>
									<tr>Je n'aime pas</tr>
								</thead>
								<tbody>
									{foodList.map((food) => (
										<tr>
											<td>
												<Form.Control
													type="text"
													name={food.food_id}
													value={getFoodName(food.food_id)}
												/>
											</td>
											<td></td>
											<td>
												<Button onClick={() => deleteFood(food.user_food_id)}>
													Supprimer
												</Button>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Form.Group>
						<Form.Group>
							<Table>
								<thead>
									<tr>Ajouter un aliment à ma liste</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<Form.Control
												type=""
												name=""
												value=""
												onChange=""
												placeholder="ajouter un aliment"
											/>
										</td>
										<td></td>
										<td>
											<Button variant='success'>ajouter</Button>
										</td>
									</tr>
								</tbody>
							</Table>
						</Form.Group>
					</div>

					<Form
						onSubmit={() => {
							updateUser();
						}}
					>
						<div className="myCardForm">
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="text"
									name="name"
									value={profile.email}
									onChange=""
									placeholder={profile.email}
								/>
							</Form.Group>
						</div>
					</Form>
				</div>
			</div>
		);
	}
	return null;
};

export default Profile;
