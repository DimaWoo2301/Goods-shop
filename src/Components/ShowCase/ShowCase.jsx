import React from "react";
import s from "./ShowCase.module.css";
import {ShowCaseItem} from "./ShowCaseItems/ShowCaseItems";
import {Link} from 'react-router-dom'
import {body} from "../../response"
const ShowCase = () => {
  return (
    <>
      <div>
        <div className={s.wrapper}>
          {body.map((el) => (
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
      </div>
    </>
  );
};

export {ShowCase};
