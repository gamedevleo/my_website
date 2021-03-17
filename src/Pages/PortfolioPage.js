import React from 'react';
import {Project} from "../components/index";
import whatsappImg from "../images/whatsapp.png";
import Covid19Img from "../images/Covid-19Tracker.png";
import AmazonImg from "../images/AmazonClone.png";
import "./css/PortfolioPage.css";

export const PortfolioPage = () => {

  return (
    <div className='portfolioPage'>
      <Project
        name="MERN STACK WHATSAPP DEMO"
        website="https://whatsapp-mern-20616.web.app/" img={whatsappImg}
        description="This is a demo of whatsapp clone, frontend is using ReactJS and hosting on firebase, backend is using nodejs and hosting on Heroku. The data is stored in real-time MongoDB."
        />
      <Project
        name="Covid-19 Tracker DEMO"
        website="https://covid-19-tracker-c3396.web.app/" img={Covid19Img}
        description="Covid-19 tracker demo provide the updated data about coronavirus cases all around this world."
        />
      <Project
        name="Amazon Clone"
        website="https://clone-8a3b6.firebaseapp.com/" img={AmazonImg}
        description="This is a demo of Amazon clone, frontend is using ReactJS and hosting on firebase, backend is using firebase cloud functions. The data is stored in real-time Database."
        />
    </div>
  )
}
