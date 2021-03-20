import React from 'react';
import './css/CircleBar.css';

export const CircleBar = ({name,percentage,color}) => {
  document.body.style.setProperty('--percentage',`${percentage}`);
  document.body.style.setProperty('--color',`${color}`);
  return (
    <div className="circleBar">
      <div className="card">
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70">
              </circle>
            </svg>
            <div className="number">
              <h2>{percentage}<span>%</span></h2>
            </div>
          </div>
          <h2 className="text">{name}</h2>
        </div>
      </div>
    </div>
  )
}
