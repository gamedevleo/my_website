import React from 'react';
import './css/SkillsBar.css';

export const SkillsBar = () => {

    //set variable in CSS
    // document.body.style.setProperty('--skillpercentage',`${percentage}%`);

    // document.body.style.getPropertyValue('--percentage').trim();

  return (
    <div className='skillsbar'>
      <h1>Software Skills</h1>
      <div className="skillBox">
          <p>HTML</p>
          <p>90%</p>
          <div className="skill">
            <div className="skill_level html"></div>
          </div>
      </div>
      <div className="skillBox">
          <p>Javascript</p>
          <p>60%</p>
          <div className="skill">
            <div className="skill_level javascript"></div>
          </div>
      </div>
      <div className="skillBox">
          <p>CSS</p>
          <p>80%</p>
          <div className="skill">
            <div className="skill_level css"></div>
          </div>
      </div>
      <div className="skillBox">
          <p>React</p>
          <p>60%</p>
          <div className="skill">
            <div className="skill_level react" ></div>
          </div>
      </div>
    </div>
  )
}
