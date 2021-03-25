import React from 'react';
import "./css/CssEffectPage.css";
import {ResponsiveCard,Tooltip} from "../components/index";
import clockImg from '../images/Clockjs.png';
import tooltipImg from '../images/tooltip.png';
import imgcutImg from '../images/imgcut.png';

export const CssEffectPage = () => {

  return (
    <div className='cssEffectPage'>
      <ResponsiveCard img={clockImg} title="Clock" description="This is a clock" to='/clock'/>
      <ResponsiveCard img={tooltipImg} title="Tooltip" description='This is a tooltip' to='/tooltip' />
      <ResponsiveCard img={imgcutImg} title='ImgCutEffect' description='This is a pure css img cut effect.' to='/imgcut'/>
  </div>
  )
}
