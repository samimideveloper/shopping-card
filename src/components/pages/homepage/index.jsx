import Layout from "../../../Layout";
import * as data from "../../../core/constans/data";
import useStyles from "./style";
import { Text, View } from "reactjs-view";
import { useCartActions } from "../../../core/constans/provider/cartProvider";

const HomePage = () => {
	const classes = useStyles();
	const dispatch=useCartActions();
	const addProduct=(product)=>{	dispatch({type:"ADD_TO_CART",payload:product});
	}
	return (
		<Layout>

			<View className={classes.container}>
				<View className={classes.productList}>
					{data.products.map((product) => {
						return (
							<View className={classes.product} key={product.id}>
								<View style={{padding:8}}>
									<img
										style={{ width: 200, height: "auto",borderRadius:"10%" }}
										src={product?.image}
										alt={product?.name}
									/>
								</View>
								<View className={classes.content}>
									<Text>{product?.name}</Text>
									<Text>$ {product?.price}</Text>
									<button onClick={()=>addProduct(product)} style={{borderRadius:"4px",width:80,border:"none",cursor:"pointer"}}>Add to cart</button>
									
								</View>
							</View>
						);
					})}
				</View>
			</View>
		</Layout>
	);
};
export { HomePage };
