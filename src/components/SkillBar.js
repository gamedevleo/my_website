import React from 'react';
import './css/SkillBar.css';

export const SkillBar = ({name,percentage,color}) => {
  document.body.style.setProperty('--skillpercentage',`${percentage}%`);
  document.body.style.setProperty('--skillbarColor',`${color}`);
  return (
    <div className='skillbar'>
      <p>{name}</p>
      <p>{percentage}%</p>
      <div className="skill_bg">
        <div className="skill_level"></div>
      </div>
    </div>
  )
}
