import React from 'react';
import Footer from '../components/Footer'
import Products from "../components/Products"
import {ramenDataFull} from "../FullDataArrays"
import "./Ramen.css"

export default function Ramen(){
  return (
    <>
    <div className="special--one"><Products heading={'Ramen'} data={ramenDataFull} /></div>
    <Footer/>
    </>
  )
  };