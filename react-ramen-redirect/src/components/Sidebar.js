import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import {Button} from './Button.js'
import'./Sidebar.css'


export default function Sidebar({isOpen,toggle}) {
  return (
    <>
    <aside className={isOpen ? "sidebar-container" : "sidebar-container-shift"} onClick={toggle}>
     <div className="icons" onClick={toggle} >
        <i className='fas fa-times close'/>
      </div>
      <div className="sidebarmenu">
        <div className="link"> <Link to='./Ramen'>Ramens</Link></div>
        <div className="link"> <Link to='./Dessert'>Desserts</Link></div>
        <div className="link"> <Link to='./Beverages'>Beverages</Link></div>
        <div className="link"> <Link to='/FullMenu'>Full Menu</Link></div>
      </div>
      <div className="side-bar-btn">
        <Link to='/'><Button buttonStyle="btn--primary" buttonSize="btn--order"  >Order Now</Button></Link>
      </div>
    </aside>
    </>
   )
}