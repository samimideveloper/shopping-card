import {  useNavigate } from "react-router-dom";
import useStyles from "./style";
import { Routes } from "../../../core/constans/routes";
import { View ,Text} from "reactjs-view";
import { useState } from "react";

type NavigateActive=
	"home"|"cart";


const Navigation = () => {

const navigate=useNavigate();
	const classes = useStyles();
	const[active,setActive]=useState<NavigateActive>("home")
	return (
		<View className={classes.mainHeader}>
			
				<View style={{width:80,paddingInline:16}} onPress={()=>setActive("home")}>
					<Text size={16} style={{backgroundColor:active==="home"?"blue":"transparent"}} onPress={()=>{navigate(Routes.homepage.create());
					setActive("home")}} >
						Home
					</Text>
				</View>
				<View style={{width:80,paddingInline:16}}>
				<Text style={{backgroundColor:active==="cart"?"blue":"transparent"}}  onPress={()=>{navigate(Routes.cart.create());setActive("cart")}} >
						Cart
					</Text>
				</View>
		
		</View>
	);
};
export { Navigation };
