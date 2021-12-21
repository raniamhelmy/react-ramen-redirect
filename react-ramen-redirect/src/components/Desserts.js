import React from "react";
import {Button} from './Button.js'
import'./Desserts.css'


export default function Desserts( { heading, data } ) {
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
          {data.map((dessert, index) => {
            return (
              <div className="desserts--card" key={index}>
                <img className="desserts--img" src={dessert.img} alt={dessert.alt} />
                <div className="desserts--info">
                    <div className="desserts--title">{dessert.name}</div>
                    <div className="desserts--desc">{dessert.desc}</div>
                    <div className="desserts--price">E£ {dessert.price}</div>
                    <div className="desserts--btn">
                       <Button buttonStyle="btn--primary" buttonSize="btn--large" onClick={handleScroll}>{dessert.button}</Button>
                    </div>
                </div>
              </div>
            );
          })}
    </div>
    </div>
  );
};
