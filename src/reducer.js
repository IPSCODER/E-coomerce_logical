// here we define all the application level states and define action tom make changes to state

export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>{
  return(basket?.reduce((amount,item) => item.price + amount,0));
}


// selector

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );

        let newBasket = [...state.basket]
        if(index>=0){
          newBasket.splice(index,1)
        }else{
          console.warn(
            `cant remove product(id: ${action.id}) as its not in the basket`
          );
        }

        return {
          ...state,
          basket:newBasket
        }
      default:
  };
};

export default reducer;
