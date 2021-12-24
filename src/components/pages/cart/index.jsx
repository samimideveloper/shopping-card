import { View ,Text} from "reactjs-view";
import { useCart,useCartActions } from "../../../core/constans/provider/cartProvider";
import Layout from "../../../Layout";

const CartPage = () => {
	const {cart,total}=useCart();
	const dispatch=useCartActions();

	const AddItemHandler=(cartItem)=>{
		dispatch({type:"ADD_TO_CART",payload:cartItem})

	}
	const RemoveHandler=(cartItem)=>{
dispatch({type:"REMOVE_PRODUCT",payload:cartItem})
	}
	return (
		<Layout>
<View>
	{cart.length ? cart.map((item)=>(
		<View style={{flexDirection:"row",padding:[16,16]}}>
		<View key={item.id} style={{flexDirection:"row",backgroundColor:"red",padding:[16,16]}}>
			<img style={{ width: 200, height: "auto",borderRadius:"10%" }}src={item.image} alt={item.name}/>
			<Text>{item.name}</Text>
			<button style={{borderRadius:"4px",width:80,border:"none",cursor:"pointer",height:30}} onClick={()=>AddItemHandler(item )}>ADD</button>
			<button style={{borderRadius:"4px",width:80,border:"none",cursor:"pointer",height:30,marginInline:8}}>{item.quantity}</button>
			<button style={{borderRadius:"4px",width:80,border:"none",cursor:"pointer",height:30}} onClick={()=>RemoveHandler(item)}>remove</button>

		</View>
		<View  style={{paddingInline:8,backgroundColor:"red"}}><h3>summary</h3>
		<Text key={item.id}>total : ${total}</Text>
		</View>
		</View>)):<Text>no item in cart</Text>}
</View>
		</Layout>
	);
};

export { CartPage };
