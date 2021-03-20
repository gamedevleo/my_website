import React from 'react';
import './css/ResponsiveCard.css';
import {Link} from 'react-router-dom';

export const ResponsiveCard = ({img,title,description,to}) => {

  return (
    <div className="container">
      <Link to={to} >
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
      </Link>
    </div>

  )
}
