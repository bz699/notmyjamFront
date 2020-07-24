import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import { Button, Form } from "react-bootstrap";

import Axios from "axios";

import "../App.css";

const Signup = () => {
	const [inputs, setInputs] = useState({
		email : "",
		password : "",
	});

	const history = useHistory();

  const { email, password } = inputs;

	const createUser= () => {
    Axios
      .post("http://localhost:8000/api/users", {
        email: email,
        password: password
      })
      .then(history.push("/signin"));
  };

	console.log(inputs)

	return (
		<div className="wrapper flexColumn">
			<div className="form">
				<div className="signForm">
					<div className="textalign">NOT MY JAM</div>

				<Form
					className="form"
					onSubmit={() => {
						createUser(inputs);
					}}>
					
						<Form.Group controlId="email" bsSize="large">
							<Form.Label>email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={inputs.email}
								onChange={(event) =>
									setInputs({
										...inputs,
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
								value={inputs.password}
								onChange={(event) =>
									setInputs({
										...inputs,
										[event.target.name]: event.target.value,
									})
								}
							/>
						</Form.Group>
						<Button variant="signin" block bsSize="large" type="submit">
							Creer mon compte
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
