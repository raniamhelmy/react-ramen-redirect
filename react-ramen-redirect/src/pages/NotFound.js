import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom'; 
import Footer from '../components/Footer'
import "./NotFound.css"

export default function NotFound(){
  return (
    <>
    <div className="error-container">
        <h1>404 Error </h1>
        <hr className="new1"/>
        <h2>Sorry This Page is Not Found</h2>
        <Link to='/'><Button buttonStyle="btn--primary" to="/" >Home</Button></Link>
    </div>
    <Footer/>
    </>
  )
  };