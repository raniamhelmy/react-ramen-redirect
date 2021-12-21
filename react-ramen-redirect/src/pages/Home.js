import React from "react";
import "../App.css";
import Products from "../components/Products";
import Desserts from "../components/Desserts";
import Speciality from "../components/Speciality";
import Footer from "../components/Footer";
import Drinks from "../components/Drinks";
import { ramenData, dessertData, drinksData } from "../data";

function Home() {
  return (
    <>
      <Products heading={"Choose your Favorite"} data={ramenData} />
      <Speciality />
      <Desserts heading={"Sweet Treats for You"} data={dessertData} />
      <Drinks heading={"Beverages from Heaven"} data={drinksData} />
      <Footer />
    </>
  );
}

export default Home;

