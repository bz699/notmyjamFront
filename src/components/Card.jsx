import React, { useState, useEffect } from 'react';

import "../App.css";
import "./styles/cards.css";

const Card = (user) => {

    return (

      <div className="card flexrow">
        <div className='myDetails'>
            <div className='cardTitle flexColumn'>
              <div className='userName'>{user.user.name}</div>
              <div className='userDiet' >{user.user.diet_id}</div>
            </div>
  
          <div className='foodDetails'>Food Details</div>
        </div>
      </div>
    );
};

export default Card;