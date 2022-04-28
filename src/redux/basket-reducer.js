const SET_IT_BASKET = 'SET_IT_BASKET';
const DELETE_POST = 'DELETE_POST';
const DELETE_ALL_POST = 'DELETE_ALL_POST';
const initialState = {
  basket: [{
    id: 1,
    isActive: true,
    productInfo: {
      infoText: 'awd',
      name: 'awd',
      price: 4123,
    },
  },
  ],
};
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IT_BASKET:
      return {
        ...state,
        basket: [
          ...state.basket,
          {
            id: action.product.id,
            isActive: true,
            productInfo: {
              infoText: action.color,
              name: action.product.productInfo.name,
              price: action.product.productInfo.price,
              mainImage: action.photo,
            },
          },
        ],
      };
    case DELETE_POST: {
      return {
        ...state,
        basket: state.basket.filter((el) => el.id !== action.idProduct),
      };
    }
    case DELETE_ALL_POST: {
      return {
        ...state,
        basket: [],
      };
    }
    default:
      return state;
  }
};

export const setBasket = (product, photo, color) => ({
  type: SET_IT_BASKET, product, photo, color,
});
export const deleteBasket = (idProduct) => ({ type: DELETE_POST, idProduct });
export const deleteAllBasket = () => ({ type: DELETE_ALL_POST });

export default basketReducer;
