import React, {useState} from 'react';
import s from './ShowCaseWindow.module.css'
import {useParams} from "react-router-dom";
import cn from "classnames"
import {body} from "../../../response"

const ShowCaseWindow = () => {

  const COLORS = [{
    name: "red", translate: "Красный"
  }, {
    name: "green", translate: "Зеленый"
  }, {
    name: "blue", translate: "Синий"
  }, {
    name: "black", translate: "Черный"
  }, {
    name: "white", translate: "Красный"
  }, {
    name: "gray", translate: "Серый"
  }, {
    name: "gold", translate: "Золотой"
  }, {
    name: "purple", translate: "Фиолетовый"
  }, {
    name: "yellow", translate: "Желтый"
  }]

  const {id} = useParams()

  const bodyIndex = body[id - 1].productInfo

  let [img, setImg] = useState(bodyIndex.mainImage)
  let [color, setColor] = useState('');
  let [visibility,setVisibility] = useState("hidden")

  const colorConverter = COLORS.find(el => el.name === color);

  const onChangeColor = ({image, color}) =>{
    setImg(image)
    setColor(color)
    setVisibility("visible")
  }

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperPhone}>
        <span>{bodyIndex.name}</span>
        <img src={img} alt=""/>
      </div>
      <div className={s.wrapperContainer}>
        <div className={s.container_color}>
          <div className={s.infoPhone}>
          <span>
            {(bodyIndex.price).toLocaleString('ru')}
            <span> руб.</span>
          </span>
            <div className={s.radius}>
              {bodyIndex.customize.map(el =>
                <div onClick={()=>{
                  onChangeColor(el)
                }} style={{backgroundColor: el.color}} className={cn(s.circle,{[s.active]: el.color === color})}/>)}
            </div>
            <p>{bodyIndex.infoText}</p>
          </div>
        </div>
        <div style={{visibility: visibility}} className={s.container_color}>
          <span>Характеристики</span>
          <span>Цвет: {colorConverter ? colorConverter.translate: 'Цвет не указан'}</span>
        </div>
      </div>
    </div>
  );
};

export {ShowCaseWindow};