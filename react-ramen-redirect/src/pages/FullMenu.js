import React, { useState } from 'react';
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import Footer from '../components/Footer'
import "./FullMenu.css"
/*get the array of items from .FullDataArrays file*/
import {dataAll} from '../FullDataArrays';

/*How to define the buttons label based on the available categories*/
const allCategories = ['All', ...new Set(dataAll.map((item) => item.category))];




export default function FullMenu() {
  const [menuItems, setMenuItems] = useState(dataAll);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(dataAll);
      return;
    }
    const newItems = dataAll.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <section className="container--wrap">
      <div className="wrap">
        <div className="title">
          <h2>Full Menu</h2>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        </div>
        <Menu items={menuItems} />
        <Footer/>
      </section>
    </>
  );
};