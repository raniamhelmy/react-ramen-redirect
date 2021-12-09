import React from 'react';
import "./Categories.css"
import {Button } from "./Button"

export default function Categories({ categories, filterItems }){
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <div className="filter-btn" key={index}>
          <Button 
            onClick={() => filterItems(category) } buttonSize="btn--small">{category}</Button>
          </div>
         
        );
      })}
    </div>
  );
};