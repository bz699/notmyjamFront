import React, { useState, useEffect }from 'react';
import { Button } from "react-bootstrap";

import "../App.css";
import "./styles/cards.css";
import Axios from 'axios';


const Profile = () => {

  const [profile, setProfile] = useState([]);

  const currentUserId = localStorage.getItem("currentUserId")

 const getCurrentUserData = () => {
  const url = `http://localhost:8000/api/users/${currentUserId}`;
  Axios.get(url)
  .then((response) => response.data)
  .then((data)=> setProfile(data[0]));
}

  useEffect(() => {
    getCurrentUserData();
  }, []);

console.log(profile)

  if(profile){
    return (
      <div>
    		<div className="wrapper flexColumn">
			
			<div className="myActions flexrow">
					<Button variant="send">envoyer</Button>
					<Button variant="modify">modifer</Button>
				</div>

			<div className="myCardForm flexrow">
				<div className='cardTitle flexrow'>
        <div>{profile.name}</div>
					<div>{profile.diet}</div>
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
    </div>
  );
}
return null;
};

export default Profile;