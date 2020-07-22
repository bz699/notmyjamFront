import React from "react";

import { Button } from "react-bootstrap";

import "../App.css";
import "./styles/cards.css";

const MyCard = () => {
	return (
		<div classname="wrapper">

			<div className="myCard flexrow">
			
      	<div className="myActions flexColumn">
					<Button variant="primary">envoyer</Button>
					<Button variant="primary">modifer</Button>
				</div>
      
        <div className='myDetails'>
            <div className='cardTitle flexrow'>
              <div>Name</div>
              <div>Diet</div>
            </div>

          <div className='foodDetails'>Food Details</div>
        </div>
			</div>
		</div>
	);
};

export default MyCard;
