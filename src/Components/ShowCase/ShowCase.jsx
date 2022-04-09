import React from "react";
import s from "./ShowCase.module.css";
import {ShowCaseItem} from "./ShowCaseItems/ShowCaseItems";
import {Link} from 'react-router-dom'
const ShowCase = () => {
  const body = [
    {
      id: 1,
      productInfo: {
        name: "Айфон 12",
        price: "199234 руб.",
        infoText:"Хороший телефон, в котором можно играть в ингрушки и серфить в интернете",
        mainImage:
          "https://avatars.mds.yandex.net/get-mpic/4705079/img_id9210994203133636452.png/orig",
        customize: [
          {
            color: "red",
            image: "..."
          },
          {
            color: "yellow",
            image: "..."
          },
          {
            color: "green",
            image:
              "https://i5.stat01.com/2/1907/119069712/075a3e/iphone11-green-500x500-png.png"
          }
        ]
      }
    },
    {
      id: 2,
      productInfo: {
        name: "Айфон 11",
        price: "2323234 руб.",
        infoText:"Хороший телефон, в котором можно играть в ингрушки",
        mainImage:
          "https://avatars.mds.yandex.net/get-mpic/4397006/img_id3884474343356692179.jpeg/orig",
        customize: [
          {
            color: "black",
            image: "..."
          }
        ]
      }
    },
    {
      id: 3,
      productInfo: {
        name: "Айфон 8",
        price: "43245234 руб.",
        infoText:"Хороший телефон, но достаточно стары",
        mainImage:
          "https://avatars.mds.yandex.net/get-mpic/5206920/img_id8651321912915689452.jpeg/orig",
        customize: [
          {
            color: "gray",
            image: "..."
          },
          {
            color: "white",
            image: "..."
          }
        ]
      }
    },
    {
      id: 4,
      productInfo: {
        name: "Xiaomi Redmi 9C",
        price: "1994 руб.",
        infoText:"Плохой телефон",
        mainImage:
          "https://avatars.mds.yandex.net/get-mpic/5281727/img_id6212693778084700018.jpeg/orig",
        customize: [
          {
            color: "red",
            image: "..."
          },
          {
            color: "green",
            image: "..."
          }
        ]
      }
    },
    {
      id: 5,
      productInfo: {
        name: "MakBook",
        price: "1994344 руб.",
        infoText:"Лучший ноутбук за все время",
        mainImage:
          "https://avatars.mds.yandex.net/get-mpic/4944925/img_id5544713746159542779.jpeg/orig",
        customize: [
          {
            color: "yellow",
            image: "..."
          }
        ]
      }
    },
    {
      id: 6,
      productInfo: {
        name: "Iphone 6 s",
        price: "10004 руб.",
        infoText:"Хороший телефон, но достаточно стары",
        mainImage:
          "https://avatars.mds.yandex.net/get-mpic/4343059/img_id534492841132060779.jpeg/orig",
        customize: [
          {
            color: "red",
            image: "..."
          },
          {
            color: "yellow",
            image: "..."
          },
          {
            color: "green",
            image: "..."
          }
        ]
      }
    },
    {
      id: 7,
      productInfo: {
        name: "MackBook pro",
        price: "1000 руб.",
        infoText:"Еще лучше чем тот ноутбук",
        mainImage:
          "https://avatars.mds.yandex.net/get-mpic/5240013/img_id8615115285392917639.jpeg/orig",
        customize: [
          {
            color: "red",
            image: "..."
          },
          {
            color: "yellow",
            image: "..."
          },
          {
            color: "green",
            image: "..."
          }
        ]
      }
    },
    {
      id: 8,
      productInfo: {
        name: "Huawei p50 pro",
        price: "234234 руб.",
        infoText:"Не пользовался не знаю",
        mainImage:
          "https://avatars.mds.yandex.net/get-mpic/4429951/img_id531797109849907337.jpeg/orig",
        customize: [
          {
            color: "black",
            image: "..."
          },
          {
            color: "yellow",
            image: "..."
          }
        ]
      }
    }
  ];
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
