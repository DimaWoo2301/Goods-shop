import React from 'react';
import s from './CategoryItems.module.css'
import {body, types} from "../../../response";
import {Link, useParams} from "react-router-dom";
import {ShowCaseItem} from "../../ShowCase/ShowCaseItems/ShowCaseItems";


const CategoryItems = () => {
  const {typesId} = useParams()
  console.log(typeof typesId)
  return (
    <>
    <div className={s.wrapper}>
      <h1>{types[typesId-1].name}</h1>
    </div>
      <div className={s.wrapperItem}>
        {body.filter(el => el.typesId === Number(typesId))
          .map(el => (
            <Link key={el.productInfo.name} to={`/post/${el.id}`}>
              <ShowCaseItem
                name={el.productInfo.name}
                price={el.productInfo.price}
                text={el.productInfo.infoText}
                mainImage={el.productInfo.mainImage}
                id={el.id}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

export {CategoryItems};