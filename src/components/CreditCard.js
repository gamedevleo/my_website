import React from 'react';
import './css/CreditCard.css';
import chipImg from '../images/chip.png';

export const CreditCard = () => {

  return (
    <section className="creditcard_bg">
      <div className='creditcard'>
        <div className="face front">
          <h3 className="debit">Debit Card</h3>
          <h3 className="bank">Bank Name</h3>
          <img src={chipImg} class='chip' alt=''/>
          <h3 className="number">0123 4567 8901 2345</h3>
          <h5 className="valid">
              <span>Valid<br/>thru</span>
              <span>10/23</span>
          </h5>
          <h5 className="cardHolder">Kaiyang Li</h5>
        </div>
        <div className="face back">
          <div className="blackbar"></div>
          <div className="ccvtext">
            <h5>Authorized Signature-not valid unless signed</h5>
            <div className="whitebar"></div>
            <div className="ccv">123</div>
          </div>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  )
}
