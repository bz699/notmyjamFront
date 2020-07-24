import React, { useState, useEffect } from "react";
import { Button, Col, Form, Table } from "react-bootstrap";
import Axios from "axios";

import "../App.css";
import "./styles/cards.css";

const Profile = () => {
	const [profile, setProfile] = useState([]);

	const currentUserId = localStorage.getItem("currentUserId");

	// CURRENT USER DATAS
	// get current user datas
	const getCurrentUserData = () => {
		const url = `http://localhost:8000/api/users/${currentUserId}`;
		Axios.get(url)
			.then((response) => response.data)
			.then((data) => setProfile(data[0]));
	};

	useEffect(() => {
		getCurrentUserData();
	}, []);

	// MODIFY CURRENT USER DATAS
	const handleChangeProfile = (event) => {
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

	// GET FOODS DATAS
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

	// get foods list
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

	
	// set last food inserted
	const [lastFood, setLastFood] = useState();
	
		const getLastFood = () => {
		const last = [...foods].pop();
		return setLastFood(last.id);
	}

	console.log("lastFood",lastFood);



	// get food name
	const getFoodName = (foodId) => {
		const foundFood = foods.find((food) => food.id === foodId);
		return foundFood ? foundFood.item : "-_o";
	};

	// Add a new Food
	const [newFood, setNewFood] = useState({ item: "" });
	const [userFood, setUserFood] = useState({
		user_id: currentUserId,
		food_id: null,
		allergy: 0,
	})

	const handleChangeNewFood = (event) => {
		const { name, value } = event.target;
		setNewFood({ ...newFood, [name]: value });
	};

	const addFood = () => {
		const url = `http://localhost:8000/api/foods`;
		Axios.post(url, newFood)
			 .then(setUserFood)
	};

	// add the new food to the uiser

	const updateUserFoodList = () => {
		const url = `http://localhost:8000/api/foods`;
		Axios.post(url)
	}

	// Delete Food
	const deleteFood = (id) => {
		const url = `http://localhost:8000/api/users/foodList/${id}`;
		Axios.delete(url)
			.then((response) => response.data)
			.finally(() => getFoodList());
	};

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

					{/* //////// DIET details ////////// */}
					<div className="myCardForm">
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Control
									type="text"
									name="name"
									value={profile.name}
									onChange={handleChangeProfile}
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

				{/* //////// FOOD Details ////////// */}
				<div className="myCardForm">
					<Form.Group>
						<Table>
							<thead>
								<tr>Je n'aime pas ça</tr>
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
					<Form
						onSubmit={(event) => {
							getLastFood();
							addFood(newFood);
						}}
					>
						<Form.Group>
							<Table>
								<thead>
									<tr>Ajouter un aliment à ma liste</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<Form.Control
												type="text"
												name="item"
												value={newFood.item}
												onChange={handleChangeNewFood}
												placeholder="entrer un aliment"
											/>
										</td>
										<td></td>
										<td>
											<Button
												variant="success"
												type="submit"
												>
												ajouter
											</Button>
										</td>
									</tr>
								</tbody>
							</Table>
						</Form.Group>
					</Form>
				</div>

				{/* //////// USER details ////////// */}
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
};

export default Profile;
