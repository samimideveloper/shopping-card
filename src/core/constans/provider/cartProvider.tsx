import { createContext,useContext,useReducer } from "react" 
import {CartReducer}from "./cartReducer"



const CartContext=createContext("");
const CartContextDispatcher=createContext(undefined);

export interface CartProps{
    cart?: any;
    total?:number;

};
export const initialStat:CartProps={
    cart:[],
    total:0
}

const CartProvider=({children}:any)=>{
    //@ts-ignore
    const [cart, dispatch] = useReducer(CartReducer, initialStat)
    return(
        <CartContext.Provider value={cart as any}>
    <CartContextDispatcher.Provider value={dispatch as any}>
        {children}
    </CartContextDispatcher.Provider>
</CartContext.Provider>
    );
};
export default CartProvider;


export const useCart=()=>useContext(CartContext);
export const useCartActions=()=>useContext(CartContextDispatcher)