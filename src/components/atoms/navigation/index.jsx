import {  useNavigate ,NavLink} from "react-router-dom";
import useStyles from "./style";
import { View ,Text} from "reactjs-view";


 const items=[{name:"Home" ,to:"/homepage",exact:true},{name:"Cart",to:"/cart"}];

const Navigation = () => {

	const classes = useStyles();
	return (
		<View className={classes.mainHeader}>
{/* 			
				<View style={{width:80,paddingInline:16}} >
					<Text size={16}  onPress={()=>{navigate(Routes.homepage.create());}}>
						Home
					</Text>
				</View>
				<View style={{width:80,paddingInline:16}}>
				<Text  onPress={()=>{navigate(Routes.cart.create());}} >
						Cart
					</Text>
				</View> */}
        {items.map((item) => {
          return <View className={classes.navlink} key={item.to}><NavLink exact={item.exact || false} className={(navData)=>navData.isActive ? classes.activeLink:classes.navlink} to={item.to}>{item.name}</NavLink></View>;
        })}
		
		</View>
	);
};
export { Navigation };
