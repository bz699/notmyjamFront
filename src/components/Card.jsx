import React from 'react';

import "../App.css";
import "./styles/cards.css";

const Card = () => {
  return (
    <div className="card flexrow">
    
      <div className='myDetails'>
          <div className='cardTitle flexColumn'>
            <div>Name</div>
            <div>Diet</div>
          </div>

        <div className='foodDetails'>Food Details</div>
      </div>
    </div>
  );
};

export default Card;