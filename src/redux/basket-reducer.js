const SET_IT_BASKET = 'SET_IT_BASKET';
const DELETE_POST = 'DELETE_POST';
const initialState = {
  basket: [{
    id: 1,
    isActive: true,
    productInfo: {
      name: 'awd',
      price: 123,
      mainImage: '',
    },
  }],
  isFetching: true,
  isActive: false,
  allPrice: 0,
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
              name: action.product.productInfo.name,
              price: action.product.productInfo.price,
              mainImage: action.product.productInfo.mainImage,
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
    default:
      return state;
  }
};

export const setBasket = (product) => ({ type: SET_IT_BASKET, product });
export const deleteBasket = (idProduct) => ({ type: DELETE_POST, idProduct });

export default basketReducer;
