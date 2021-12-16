import { NavLink, useLocation, useMatch } from "react-router-dom";
import useStyles from "./style";
import { Menu } from "antd";
import { Routes } from "../../../core/constans/routes";
import { View } from "reactjs-view";
import { routes } from "../../routes";

const Navigation = () => {


	const classes = useStyles();
	return (
		<View className={classes.mainHeader}>
			<Menu>
				<Menu.Item key={1} title="home">
					<NavLink end to={Routes.homepage.create()}>
						Home
					</NavLink>
				</Menu.Item>
				<Menu.Item key={2} title="cart">
					<NavLink end to={Routes.cart.create()}>
						Cart
					</NavLink>
				</Menu.Item>
			</Menu>
		</View>
	);
};
export { Navigation };
