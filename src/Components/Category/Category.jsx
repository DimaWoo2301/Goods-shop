import React from 'react';
import s from './Category.module.css'
import {ListCategory} from "./ListCategory/ListCategory";
import {types} from  "../../response"
import {Link} from 'react-router-dom'



const Category = () => {

  return (
    <div className={s.content}>
      <h1>Категории</h1>
      <div className={s.wrapper_items}>
        {types.map(el =>(
          <Link key={el.id} to={`/category/${el.id}`}>
            <ListCategory img={el.img} name={el.name}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export {Category};