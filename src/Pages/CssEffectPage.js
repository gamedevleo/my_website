import React from 'react';
import "./css/CssEffectPage.css";
import {ResponsiveCard,Tooltip} from "../components/index";
import clockImg from '../images/Clockjs.png';
import tooltipImg from '../images/tooltip.png';

export const CssEffectPage = () => {

  return (
    <div className='cssEffectPage'>
      <ResponsiveCard img={clockImg} title="Clock" description="This is a clock" to='/clock'/>
      <ResponsiveCard img={tooltipImg} title="Tooltip" description='This is a tooltip' to='/tooltip' />
  </div>
  )
}
