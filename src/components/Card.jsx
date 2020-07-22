import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import "../App.css";
import "./styles/cards.css";

const Card = (user) => {


    // GET DIET NAME
    const [ diets, setDiets] = useState([]);

    const getDietsData = () => {
      const url = "http://localhost:8000/api/diets";
      Axios.get(url)
        .then((response) => response.data)
        .then((data) => setDiets(data));
    };
  
    useEffect(() => {
      getDietsData();
    }, []);
  
    const getDietName = (dietId) => {
      const foundDiet = diets.find((diet) => diet.id === dietId);
      return foundDiet ? foundDiet.name : 'o_o';
    };


    return (

      <div className="card">
        <div className='myDetails'>
            <div className='cardTitle flexColumn'>
              <div className='userName'>{user.user.name}</div>
              <div className='userDiet' >{getDietName(user.user.diet_id)}</div>
            </div>
  
          <div className='foodDetails'>Food Details</div>
        </div>
      </div>
    );
};

export default Card;