import React from 'react';
//import {Link} from "react-router-dom"
import {Button} from './Button.js'
import "./Menu.css"

export default function Menu({ items }){
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  return (
    <div className='full--menu'>
      <div className="items--wrap">
      {items.map((menuItem,index) => {
        /*const { id, title, img, desc, price } = menuItem;*/
        return (
        <article key={index} className='menu-item'>
        <div className="item-ganb-bad">
            <img src={menuItem.img} alt={menuItem.alt} className='product--img' />
            <div className="item--info">
             <header>
                    <div className="product--title">{menuItem.name}</div>
                    <div className="price"><small>E£</small> {menuItem.price}</div>
              </header>
                    <div className="product--desc">{menuItem.desc}</div>
                    
                    <div className="product--btn">
                       <Button buttonStyle="btn--primary" buttonSize="btn--medium" onClick={handleScroll}>{menuItem.button}</Button>
                    </div>
              </div>
            </div>
          </article>
        );
      })}
      </div>
    </div>
  );
};
