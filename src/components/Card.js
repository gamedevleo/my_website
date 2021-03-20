import React from 'react';
import './css/Card.css';

export const Card = ({name,description}) => {

  return (
    <div className='card'>
      <h1 className="name">{name}</h1>
      <p>{description}</p>
    </div>
  )
}
