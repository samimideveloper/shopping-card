import { NavLink } from "react-router-dom";
import useStyles from "./style";
import { View } from "reactjs-view";
import { useCart } from "../../../core/constans/provider/cartProvider";
import { Routes } from "../../../core/constans/routes";
import { Badge } from "antd";

const Navigation = () => {
	const { cart } = useCart();
	const classes = useStyles();
	return (
		<View className={classes.mainHeader}>
			<View style={{ flexDirection: "row", textAlign: "center" }}>
				<NavLink
					className={(navData) =>
						navData.isActive ? classes.activeLink : classes.navlink
					}
					to={Routes.homepage.create()}>
					home
				</NavLink>
				<View style={{ flexDirection: "row", marginLeft: 24 }}>
					<Badge count={cart.length} color={"green"} offset={[-26,-6]}>
						<NavLink
							className={(navData) =>
								navData.isActive ? classes.activeLink : classes.navlink
							}
							to={Routes.cart.create()}>
							cart
						</NavLink>
					</Badge>
				</View>
			</View>
		</View>
	);
};
export { Navigation };
