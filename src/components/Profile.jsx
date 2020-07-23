import React, { useState, useEffect } from "react";
import { Button, Col, Form } from "react-bootstrap";
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
    const {name, value} = event.target;
    setProfile({...profile, [name]:value })

  }

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
							<Button variant="modify" type="submit">
								modifer
							</Button>
						</div>

            <div className="myCardForm flexrow">
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
						</div>

						<div className="myCardForm">
							<div className="foodDetails">Food Details</div>
						</div>

						<div className="myCardForm">
							<div className="foodDetails">User Details</div>
						</div>
					</Form>
					<div className="myCardForm">
						<div className="myCollection">MyCollection</div>
					</div>
				</div>
			</div>
		);
	}
	return null;
};

export default Profile;
