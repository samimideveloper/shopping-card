import { Routes } from "./core/constans/routes";
import { Navigate, Route, Routes as Switche } from "react-router-dom";
import { HomePage } from "./components/pages/homepage";
import { Cart } from "./components/pages/cart";
import { View } from "reactjs-view";
import { Navigation } from "./components/atoms/navigation";

function Router() {
	return (
		<View>
			<Navigation />

			<Switche>
				<Route path={Routes.homepage.template()} element={<HomePage />} />
				<Route path={Routes.cart.template()} element={<Cart />} />
			</Switche>
		</View>
	);
}

export default Router;
