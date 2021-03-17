import React from 'react';
import "./css/Project.css";
export const Project = ({name,img,website,description}) => {

  return (
      <section className="project">
        <div className="card">
          <div className="box">
            <div className="imgBox">
              <img src={img} alt=""/>
            </div>
            <a href={website} target="_blank" rel="noopener noreferrer">
              <div className="contentBox">
                <div>
                  <h2>{name}</h2>
                  <p>{description}</p>
                </div>
              </div>
            </a>
          </div>
        </div>

      </section>



  )
}
