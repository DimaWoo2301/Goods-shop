export const SET_IT_BASKET = 'basket/SET_IT_BASKET';
export const DELETE_POST = 'basket/DELETE_POST';
export const CHANGE_PRODUCT_COUNTS = 'basket/CHANGE_PRODUCT_COUNTS';

const initialState = {
  basket: JSON.parse(localStorage.getItem('product')) || [],
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
              counts: 1,
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
    case CHANGE_PRODUCT_COUNTS: {
      const { id, count } = action.payload;
      return {
        ...state,
        basket: state.basket.map((product) => {
          if (product.id === id) {
            product.productInfo.counts = count;
          }
          return product;
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
