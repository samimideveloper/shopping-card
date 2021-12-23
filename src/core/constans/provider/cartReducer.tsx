const CartReducer=({state,action}:any)=>{
    switch(action.type){
        case "ADD_TO_CART":
             return state;
        default:return state;

    }

}

export {CartReducer}