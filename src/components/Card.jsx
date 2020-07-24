import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import "../App.css";
import "./styles/cards.css";

const Card = (user) => {


    // GET DIET
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

    // GET FOOD
    // get food lists
    const [ foodList, setFoodList] = useState([]);

    const getFoodList = () => {
      const url = `http://localhost:8000/api/users/${user.user.id}/foodList`;
      Axios.get(url)
        .then((response) => response.data)
        .then((data) => setFoodList(data));
    };

    useEffect(() => {
      getFoodList();
    }, []);

    // get food name
    const [ foods, setFoods] = useState([]);

    const getFoodData = () => {
      const url = 'http://localhost:8000/api/foods';
      Axios.get(url)
        .then((response) => response.data)
        .then((data) => setFoods(data));
    };

    useEffect(() => {
      getFoodData();
    }, []);

    const getFoodName = (foodId) => {
      const foundFood = foods.find((food) => food.id === foodId);
      return foundFood ? foundFood.item : '-_o';
    };


    return (

      <div className="cardSmall">
        <div className='myDetails'>
            <div className='cardTitle flexColumn'>
              <div className='userName'>{user.user.name}</div>
              <div className='userDiet' >{getDietName(user.user.diet_id)}</div>
            </div>
  
          <div className='foodDetails'>{foodList.map((list) => <p>{getFoodName(list.food_id)}</p>)}
          </div>
        </div>
      </div>
    );
};

export default Card;