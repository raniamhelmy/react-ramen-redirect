import React from 'react';
import Footer from '../components/Footer'
import Products from "../components/Products"
import {dessertDataFull} from "../FullDataArrays"
import "./Ramen.css"

export default function Dessert(){
  return (
    <>
    <div className="special--one"><Products heading={'Desserts'} data={dessertDataFull} /></div>
    <Footer/>
    </>
  )
  };