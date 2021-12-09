import React from "react";
//import {Link} from "react-router-dom"
import {Button} from './Button.js'
import'./Products.css'



export default function Products( { heading, data } ) {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  return  (
    <div className="product--container">
      <div className="product--heading"><h2>{heading}</h2></div>
      <div className="product--card--wrap">
          {data.map((product, index) => {
            return (
              <div className="product--card" key={index}>
                <img className="product--img" src={product.img} alt={product.alt} />
                <div className="product--info">
                    <div className="product--title">{product.name}</div>
                    <div className="product--desc">{product.desc}</div>
                    <div className="product--price">E£ {product.price}</div>
                    <div className="product--btn">
                       <Button buttonStyle="btn--primary" buttonSize="btn--large" onClick={handleScroll} >{product.button}</Button>
                    </div>
                </div>
              </div>
            );
          })}
    </div>
    </div>
  );
};
