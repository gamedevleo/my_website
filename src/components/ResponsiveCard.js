import React from 'react';
import './css/ResponsiveCard.css';

export const ResponsiveCard = ({img,title,description}) => {

  return (
    <div className="container">
      <div className='box'>
        <div className="imgBox">
          <img src={img} alt={title}/>
        </div>
        <div className="content">
          <h2>{title}<br/>
            <span>{description}</span>
          </h2>
        </div>
      </div>
      <section className="bg"></section>
    </div>

  )
}
