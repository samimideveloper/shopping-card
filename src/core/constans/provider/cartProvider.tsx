import { createContext, useContext, useReducer, ReactNode } from "react";
import { CartReducer } from "./cartReducer";

const CartContext = createContext({});
const CartContextDispatcher = createContext({});

interface initialStateProps {
  cart: [];
  total: number;
}
export const initialState: initialStateProps = { cart: [], total: 0 };

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, dispatch] = useReducer(
    CartReducer,
    initialState as initialStateProps
  );
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};
export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
