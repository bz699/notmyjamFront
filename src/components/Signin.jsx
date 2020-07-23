import React, { useState } from "react";
import { Button, Form, Nav, NavLink, NavItem } from "react-bootstrap";

import Axios from "axios";

import "../App.css";

const Signin = (props) => {
	const [signin, setSignin] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (event) => {
    event.preventDefault();
		Axios({
			method: "post",
			url: "http://localhost:8000/api/users/auth",
			data: signin,
			headers: new Headers({
				"Content-Type": "application/json",
			}),
    })
    .then((response) => response.data)
    .then((data) => localStorage.setItem('token', data.token))
    .then(() => props.history.push('/myprofile'))
    .catch();
	};

	return (
		<div className="wrapper flexColumn">
			<div className="form">
				<div className="signForm">
					<div className="textalign">NOT MY JAM</div>
					<Form className="form" onSubmit={handleSubmit}>
						<Form.Group controlId="email" bsSize="large">
							<Form.Label>email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={signin.email}
								onChange={(event) =>
									setSignin({
										...signin,
										[event.target.name]: event.target.value,
									})
								}
							/>
						</Form.Group>

						<Form.Group controlId="password" bsSize="large">
							<Form.Label>mot de passe</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={signin.password}
								onChange={(event) =>
									setSignin({
										...signin,
										[event.target.name]: event.target.value,
									})
								}
							/>
						</Form.Group>
						<Button variant="signin" block bsSize="large" type="submit">
							se connecter
						</Button>
					</Form>
				</div>

				<Nav>
					<NavItem className="textalign">
						<p>Vous n'avez pas encore de compte ?</p>
						<NavLink href="/signup">en créer un</NavLink>
					</NavItem>
				</Nav>
			</div>
		</div>
	);
};

export default Signin;
