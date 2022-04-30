export const SET_IT_BASKET = 'SET_IT_BASKET';
export const DELETE_POST = 'DELETE_POST';

const initialState = {
  basket: [],
};
const reducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default reducer;
