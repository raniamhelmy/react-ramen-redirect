import React from "react";
import {Button} from './Button.js'
import'./Desserts.css'


export default function Drinks( { heading, data } ) {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  return  (
    <div className="desserts--container">
      <div className="desserts--heading"><h2>{heading}</h2></div>
      <div className="desserts--card--wrap">
          {data.map((drink, index) => {
            return (
              <div className="desserts--card" key={index}>
                <img className="desserts--img" src={drink.img} alt={drink.alt} />
                <div className="desserts--info">
                    <div className="desserts--title">{drink.name}</div>
                    <div className="desserts--desc">{drink.desc}</div>
                    <div className="desserts--price">E£ {drink.price}</div>
                    <div className="desserts--btn">
                       <Button buttonStyle="btn--primary" buttonSize="btn--large" onClick={handleScroll}>{drink.button}</Button> 
                    </div>
                </div>
              </div>
            );
          })}
    </div>
    </div>
  );
};
