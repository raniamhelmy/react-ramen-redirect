import React from "react";
//import {Link} from "react-router-dom"
import {Button} from './Button.js'
import'./Speciality.css'

export default function Speciality() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  return (
    <>
    <div className="speciality--container">
      <h2>Ramen of the Day</h2>
      <p><strong><em>Tonkotsu Ramen </em></strong>made of pork bones that boiled down until they dissolve into a cloudy white broth .</p>
       <Button buttonStyle="btn--primary" buttonSize="btn--large" onClick={handleScroll}>Order Now</Button>
    </div>
    </>
    )
    };