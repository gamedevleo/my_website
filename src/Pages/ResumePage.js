import React from 'react';
import './css/ResumePage.css';
import { Avatar } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AvatarImg from '../images/Avatar.jpg';
import {CircleBar,SkillsBar,SkillBar,Card} from '../components/index';
import resumeHeader from '../images/resumeHeader.png';

const useStyles = makeStyles(theme=>({
  small:{
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large:{
    width:theme.spacing(20),
    height:theme.spacing(20),
  },
}));


export const ResumePage = () => {
  const classes = useStyles();

  return (
    <div className='resumePage'>
      <div className="resumePage_left">
        <div className="resumePage_me">
          <Avatar src={AvatarImg} className={classes.large} style={{width:'10vw',height:'10vw'}}/>
          <h2>Kaiyang Li</h2>
          <p>React Developer</p>
        </div>
        <div className="resumePage_aboutme">
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
        <div className="resumePage_skills">
          <SkillsBar />
        </div>
      </div>
      <div className="resumePage_right">
        <div className="resumePage_header">
          <div className="imgBox">
            <img src={resumeHeader} alt=""/>
          </div>

          <div className="resumePage_headerText">
            <h1>Discover my amazing Project!</h1>
            <p>	&lt;<span>code</span>&gt; I build web application. &lt;&#47;<span>code</span>&gt;</p>
          </div>
        </div>
        <div className="resumePage_content">
          <h1>My Skills</h1>
          <div className='resumePage_services'>
            <Card name='Web development' description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a when an unknown printer took a"/>
            <Card name='Web development' description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a when an unknown printer took a"/>
            <Card name='Web development' description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a when an unknown printer took a"/>
            <Card name='Web development' description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a when an unknown printer took a"/>
          </div>
        </div>
      </div>
    </div>
  )
}
