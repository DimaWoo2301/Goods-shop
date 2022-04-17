const SET_IT_BASKET = 'SET_IT_BASKET';

const initialState = {
  basket: [],
  isFetching: true,
  isActive: false,
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
    default:
      return state;
  }
};

export const setBasket = (itBasket, product) => ({ type: SET_IT_BASKET, itBasket, product });

export default basketReducer;
