import iphone6sGold from '../assets/img/products/Aphone6s-gold.webp';
import iphone6sRed from '../assets/img/products/Aphone6s-red.jpg';
import iPhone8gray from '../assets/img/products/Aphone8-grey.webp';
import iPhone8white from '../assets/img/products/Aphone8-white.png';
import iPhone11Black from '../assets/img/products/Aphone11-black.jpg';
import iPhone11Purple from '../assets/img/products/Aphone11-purple.webp';
import iPhone12Green from '../assets/img/products/Aphone12-green.png';
import iPhone12Purple from '../assets/img/products/Aphone12-purple.webp';
import iPhone12red from '../assets/img/products/Aphone12-red.jpg';
import iPhone12Yellow from '../assets/img/products/Aphone12-yellow.jpg';
import HolodosRUS2099Black from '../assets/img/products/Holodos-RUS-2099-black.webp';
import HolodosRUS2099White from '../assets/img/products/Holodos-RUS-2099-white.webp';
import HuaweiP50ProBlack from '../assets/img/products/Huawei-p50-pro-black.webp';
import HuaweiP50ProBlue from '../assets/img/products/Huawei-p50-pro-blue.jpg';
import HuaweiP50ProYellow from '../assets/img/products/Huawei-p50-pro-yellow.png';
import MacBookProBlack from '../assets/img/products/MacBook-pro-black.webp';
import MacBookProWhite from '../assets/img/products/MacBook-pro-white.webp';
import MacBookProYellow from '../assets/img/products/MacBook-pro-yellow.jpg';
import MakBookWhite from '../assets/img/products/MacBook-White.webp';
import XiaomiRedmi9CGreen from '../assets/img/products/Xiaomi-Redmi-9C-green.jpg';
import XiaomiRedmi9COrange from '../assets/img/products/Xiaomi-Redmi-9C-orange.webp';

const initialState = {
  types: [
    {
      id: 1,
      name: 'Сматрфоны',
      img: 'https://img.freepik.com/free-vector/modern-phone-on-white-background_153132-148.jpg',
    },
    {
      id: 2,
      name: 'Холодильники',
      img: 'https://static6.depositphotos.com/1027775/640/i/450/depositphotos_6407636-stock-photo' +
        '-modern-refrigerator-isolated-on-a.jpg',
    },
    {
      id: 3,
      name: 'Ноутбуки',
      img: 'https://st4.depositphotos.com/1890869/24643/v/450/depositphotos_246431000-stock' +
        '-illustration-isolated-laptop-empty-space-white.jpg?forcejpeg=true',
    },
    {
      id: 4,
      name: 'Комплектующие для коммпьютеров',
      img: 'https://st4.depositphotos.com/1890869/24643/v/450/depositphotos_246431000-stock' +
        '-illustration-isolated-laptop-empty-space-white.jpg?forcejpeg=true',
    },
    {
      id: 5,
      name: 'Стиральные машины',
      img: 'https://st4.depositphotos.com/1890869/24643/v/450/depositphotos_246431000-stock' +
        '-illustration-isolated-laptop-empty-space-white.jpg?forcejpeg=true',
    },
  ],
  products: [
    {
      id: 1,
      typesId: 1,
      productInfo: {
        name: 'Айфон 12',
        price: 199234,
        infoText: 'Хороший телефон, в котором можно играть в ингрушки и серфить в интернете',
        mainImage: iPhone12Purple,
        customize: [
          {
            color: 'red',
            image: iPhone12red,
          },
          {
            color: 'yellow',
            image: iPhone12Yellow,
          },
          {
            color: 'green',
            image:
            iPhone12Green,
          },
          {
            color: 'purple',
            image: iPhone12Purple,
          },
        ],
      },
    },
    {
      id: 2,
      typesId: 1,
      productInfo: {
        name: 'Айфон 11',
        price: 2323234,
        infoText: 'Хороший телефон, в котором можно играть в ингрушки',
        mainImage:
        iPhone11Purple,
        customize: [
          {
            color: 'black',
            image: iPhone11Black,
          },
          {
            color: 'purple',
            image: iPhone11Purple,
          },
        ],
      },
    },
    {
      id: 3,
      typesId: 1,
      productInfo: {
        name: 'Айфон 8',
        price: 43245234,
        infoText: 'Хороший телефон, но достаточно стары',
        mainImage:
        iPhone8gray,
        customize: [
          {
            color: 'gray',
            image: iPhone8gray,
          },
          {
            color: 'white',
            image: iPhone8white,
          },
        ],
      },
    },
    {
      id: 4,
      typesId: 1,
      productInfo: {
        name: 'Xiaomi Redmi 9C',
        price: 1994,
        infoText: 'Плохой телефон',
        mainImage:
        XiaomiRedmi9COrange,
        customize: [
          {
            color: 'orange',
            image: XiaomiRedmi9COrange,
          },
          {
            color: 'green',
            image: XiaomiRedmi9CGreen,
          },
        ],
      },
    },
    {
      id: 5,
      typesId: 3,
      productInfo: {
        name: 'MacBook',
        price: 1994344,
        infoText: 'Лучший ноутбук за все время',
        mainImage:
        MakBookWhite,
        customize: [
          {
            color: 'white',
            image: MakBookWhite,
          },
        ],
      },
    },
    {
      id: 6,
      typesId: 1,
      productInfo: {
        name: 'Iphone 6 s',
        price: 10004,
        infoText: 'Хороший телефон, но достаточно стары',
        mainImage:
        iphone6sGold,
        customize: [
          {
            color: 'red',
            image: iphone6sRed,
          },
          {
            color: 'gold',
            image: iphone6sGold,
          },
        ],
      },
    },
    {
      id: 7,
      typesId: 3,
      productInfo: {
        name: 'MacBook pro',
        price: 1000,
        infoText: 'Еще лучше чем тот ноутбук',
        mainImage:
        MacBookProBlack,
        customize: [
          {
            color: 'white',
            image: MacBookProWhite,
          },
          {
            color: 'yellow',
            image: MacBookProYellow,
          },
          {
            color: 'black',
            image: MacBookProBlack,
          },
        ],
      },
    },
    {
      id: 8,
      typesId: 1,
      productInfo: {
        name: 'Huawei p50 pro',
        price: 234234,
        infoText: 'Не пользовался не знаю',
        mainImage:
        HuaweiP50ProBlack,
        customize: [
          {
            color: 'black',
            image: HuaweiP50ProBlack,
          },
          {
            color: 'yellow',
            image: HuaweiP50ProYellow,
          },
          {
            color: 'blue',
            image: HuaweiP50ProBlue,
          },
        ],
      },
    },
    {
      id: 9,
      typesId: 2,
      productInfo: {
        name: 'Holodos RUS 2099',
        price: 59999,
        infoText: 'Хороший холодильник, держит до -40',
        mainImage:
        HolodosRUS2099Black,
        customize: [
          {
            color: 'black',
            image: HolodosRUS2099Black,
          },
          {
            color: 'white',
            image: HolodosRUS2099White,
          },
        ],
      },
    },
  ],
  items: [],
  isFetching: true,
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
