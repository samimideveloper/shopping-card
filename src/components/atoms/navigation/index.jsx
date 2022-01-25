import { NavLink } from "react-router-dom";
import useStyles from "./style";
import { View ,Text} from "reactjs-view";
import { useCart } from "../../../core/constans/provider/cartProvider";
import { Routes } from "../../../core/constans/routes";
import { Badge } from "antd";

const Navigation = () => {
	const { cart } = useCart();
	const classes = useStyles();
	return (
		<View className={classes.mainHeader}>
			<NavLink
				className={(navData) =>
					navData.isActive ? classes.activeLink : classes.navlink
				}
				to={Routes.homepage.create()}>
          <Text size="large">Home</Text>
				
			</NavLink>
			<View style={{ paddingInline: 16 }}>
				<NavLink
					className={(navData) =>
						navData.isActive ? classes.activeLink : classes.navlink
					}
					to={Routes.cart.create()}>
          <Text size="large">Cart</Text>
				</NavLink>
			</View>
		</View>
	);
};
export { Navigation };
