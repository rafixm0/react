import React, { useState } from 'react';
import './styles.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory) => {

      if ( categories.includes(newCategory)) return;

      setCategories([newCategory, ...categories]);
      
      //categories.push(newCategory);
      //console.log(categories);
      //setCategories([newCategory, ...categories]);
      //setCategories( cat => [...cat, 'Valorant']);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={ (value) => onAddCategory(value)}
        />

      
        { 
          categories.map( (category) => (
            <GifGrid 
              key = { category } 
              category = { category } />
            ))
        }
      

     
        

    </>
  )
}
