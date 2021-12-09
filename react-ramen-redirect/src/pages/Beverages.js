import React from 'react';
import Footer from '../components/Footer'
import Products from "../components/Products"
import {drinksDataFull} from "../FullDataArrays"
import "./Ramen.css" 

export default function Beverages (){
  return (
    <>
    <div className="special--one"><Products heading={'Beverages'} data={drinksDataFull} /></div>
    <Footer/>
    </>
  )
  };