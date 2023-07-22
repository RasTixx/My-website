import React from 'react';
import CardItem from './CardItem';
import "./Cards.css";

function Cards() {
  return (
    <div className='cards'>
     <h1>Start Reading Now</h1> 
     <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem 
          src={require("../images/img-9.jpg")}
          text="Explore what discipline means"
          label="Faith"
          path="/Text1"
          />
          <CardItem 
          src={require("../images/img-2.jpg")}
          text="Find strength in faith"
          label="Faith"
          path="/Read"
          />
        </ul>
        <ul className='cards__items'>
        <CardItem 
          src={require("../images/img-3.jpg")}
          text="Motivation is temporay"
          label="Faith"
          path="/Read"
          />
          <CardItem 
          src={require("../images/img-4.jpg")}
          text="Love with all your heart"
          label="Faith"
          path="/Read"
          />
          <CardItem 
          src={require("../images/img-8.jpg")}
          text="Maturity does not depend on age"
          label="Faith"
          path="/Read"
          />
          <CardItem 
          src={require("../images/img-2.jpg")}
          text="Find strength in faith"
          label="Faith"
          path="/Read"
          />
          <CardItem 
          src={require("../images/img-2.jpg")}
          text="Find strength in faith"
          label="Faith"
          path="/Read"
          />
          <CardItem 
          src={require("../images/img-2.jpg")}
          text="Find strength in faith"
          label="Faith"
          path="/Read"
          />
          </ul>
      </div> 
     </div>
    </div>
  );
}

export default Cards;
