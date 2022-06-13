const addProductToCart = (
  state: { cart: any; total: any },
  payload: { id: any; offprice: any }
) => {
  const updatedCart = [...state.cart];
  const updateItemIndex = updatedCart.findIndex(
    (item) => item.id === payload.id
  );
  if (updateItemIndex < 0) {
    updatedCart.push({ ...payload, quantity: 1 });
  } else {
    const updatedItem = { ...updatedCart[updateItemIndex] };
    updatedItem.quantity++;
    updatedCart[updateItemIndex] = updatedItem;
  }
  return {
    ...state,
    cart: updatedCart,
    total: state.total + payload.offprice,
  };
};

const removeProductFromCart = (
  state: { cart: any; total: number },
  payload: { id: any; offprice: number }
) => {
  const updatedCart = [...state.cart];
  const updateItemIndex = updatedCart.findIndex(
    (item) => item.id === payload.id
  );
  const updatedItem = { ...updatedCart[updateItemIndex] };
  if (updatedItem.quantity === 1) {
    const filteredCart = updatedCart.filter((item) => item.id !== payload.id);
    return {
      ...state,
      cart: filteredCart,
      total: state.total - payload.offprice,
    };
  } else {
    updatedItem.quantity--;
    updatedCart[updateItemIndex] = updatedItem;
    return {
      ...state,
      cart: updatedCart,
      total: state.total - payload.offprice,
    };
  }
};

const CartReducer = (
  state: { cart: any; total: number },
  action: { type: any; payload: { id: any; offprice: number } }
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addProductToCart(state, action.payload);

    case "REMOVE_PRODUCT":
      return removeProductFromCart(state, action.payload);

    default:
      return state;
  }
};

export { CartReducer };
