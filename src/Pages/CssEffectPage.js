import React from 'react';
import "./css/CssEffectPage.css";
import {Clock,ResponsiveCard} from "../components/index";
import clockImg from '../images/Clockjs.png';

export const CssEffectPage = () => {

  return (
    <div className='cssEffectPage'>
      <ResponsiveCard img={clockImg} title="Clock" description="This is a clock" to='/clock'/>
    </div>
  )
}
