import React from "react";
import { Button, Form, Nav, NavLink, NavItem } from "react-bootstrap";

import "../App.css";

const Signin = () => {
	return (
		<div className="wrapper flexColumn">
			<div className="form">

				<div className="signForm">
        <div className="textalign">NOT MY JAM</div>
					<Form className="form" onSubmit="">
						<Form.Group controlId="email" bsSize="large">
							<Form.Label>identifiant</Form.Label>
							<Form.Control type="email" name="email" value="" onChange="" />
						</Form.Group>

						<Form.Group controlId="password" bsSize="large">
							<Form.Label>mot de passe</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value=""
								onChange=""
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
