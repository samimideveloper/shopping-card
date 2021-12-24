const CartReducer=( state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
           { const updatedCart=[...state.cart];
            const updateItemIndex=updatedCart.findIndex((item)=>item.id===action.payload.id);
            if(updateItemIndex<0){
                updatedCart.push({...action.payload,quantity:1})
            }else{
                const updatedItem={...updatedCart[updateItemIndex]};
                updatedItem.quantity++;
                updatedCart[updateItemIndex]=updatedItem

            }
             return {...state,cart:updatedCart,total:state.total+action.payload.price };}
             case "REMOVE_PRODUCT":
                const updatedCart=[...state.cart];
                const updateItemIndex=updatedCart.findIndex((item)=>item.id===action.payload.id);
                const updatedItem={...updatedCart[updateItemIndex]};
if(updatedItem.quantity===1){
    const filteredCart=updatedCart.filter((item)=>item.id !== action.payload.id);
    return {...state,cart:filteredCart,total:state.total-action.payload.price}
}else{
updatedItem.quantity --;
updatedCart[updateItemIndex]=updatedItem;
return {...state,cart:updatedCart,total:state.total-action.payload.price}
}
        default:
            return state;

    }

}

export {CartReducer}