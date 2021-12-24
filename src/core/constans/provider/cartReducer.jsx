const CartReducer=( state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            const updatedCart=[...state.cart];
            const updateItemIndex=updatedCart.findIndex((item)=>item.id===action.payload.id);
            if(updateItemIndex<0){
                updatedCart.push({...action.payload,quantity:1})
            }else{
                const updatedItem={...updatedCart[updateItemIndex]};
                updatedItem.quantity++;
                updatedCart[updateItemIndex]=updatedItem

            }
             return {...state,cart:updatedCart };
        default:
            return state;

    }

}

export {CartReducer}