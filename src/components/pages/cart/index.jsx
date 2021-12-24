import { View ,Text} from "reactjs-view";
import { useCart } from "../../../core/constans/provider/cartProvider";
import Layout from "../../../Layout";

const CartPage = () => {
	const {cart}=useCart();
	return (
		<Layout>
<View>
	{cart.length ? cart.map((item)=>(
		<View style={{flexDirection:"row",padding:[16,16]}}>
		<View key={item.id} style={{flexDirection:"row",backgroundColor:"red"}}>
			<img style={{ width: 200, height: "auto",borderRadius:"10%" }}src={item.image} alt={item.name}/>
			<Text>{item.name}</Text>
			<Text style={{paddingInline:8}} size={14}>{item.quantity}</Text> 
			<button style={{borderRadius:"4px",width:80,border:"none",cursor:"pointer",height:30}} >ADD</button>
			<button style={{borderRadius:"4px",width:80,border:"none",cursor:"pointer",height:30,marginInline:8}}>{item.quantity}</button>
			<button style={{borderRadius:"4px",width:80,border:"none",cursor:"pointer",height:30}}>remove</button>

		</View>
		<View style={{paddingInline:8,backgroundColor:"red"}}><h3>summary</h3>
		<Text>total : ${item.price * item.quantity}</Text>
		</View>
		</View>)):<Text>no item in cart</Text>}
</View>
		</Layout>
	);
};

export { CartPage };
