export const initialState={
    basket:[],
    user:null
};
const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case "EMPTY_BASKET":
        return {
          ...state,
          basket:[],
        }
      case "REMOVE_FROM_BASKET":
        const idx = state.basket.findIndex((basketItem) => basketItem.title === action.title);
        let newBasket = [...state.basket];
        if (idx >= 0) {
          newBasket.splice(idx, 1);
        } else {
          console.warn(`cant remove ${action.id}`);
        }
        return {
          ...state,
          basket: newBasket,
        };
        case "SET_USER":
            return {
              ...state,
              user: action.user,
        };
      default:
        return state;
    }
  };
export default reducer;

export const getBasketTotal=(basket)=>{
    return basket.reduce((accumulator, product) => accumulator + product.price, 0);
}
