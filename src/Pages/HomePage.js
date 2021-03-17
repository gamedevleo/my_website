import React from 'react';
import './css/HomePage.css';
import githubLogo from "../images/github.png";
import linkedinLogo from "../images/linkedin.png";

export const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="homePage_container">
        <div className='homePage_header'>
          <h1>
            Kaiyang Li
          </h1>
          <p>Web developer | React Developer</p>
          <div className="homePage_images">
            <a href="https://github.com/gamedevleo" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/leo-li-960499196/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="linkedin"/>
            </a>

          </div>
        </div>

        <div className="homePage_content">
          <div>
            <p>Hi, I am Kaiyang. I completed my Bachelor's degree in game programming at AIT(Academy of Information Technology) in March,2020.
  I am a faster learner and learning new techniques quickly, as well as having good communication skills.

  <br />I am a self-motivated graduate developer and keen to learn new knowledge that can solve problems. Usually, I spend most of my time on books and tutorials, I typed all the code in tutorials and books to learn. As a fast learner, I am confident to work in a new environment and use everything I learned to do all the tasks.</p>
          </div>
          <div className="homePage_contact">
            <ul>
              <li>
                <span>
                  <b>Address:</b>
                </span>
                <span>Sydney</span>
              </li>
              <li>
                <span>
                  <b>Email:</b>
                </span>
                <span>gamedevleo@gmail.com</span>
              </li>
              <li>
                <span>
                  <b>Phone:</b>
                </span>
                <span>+0466627022</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
