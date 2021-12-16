import { Routes } from "../core/constans/routes";
import { Cart } from "./pages/cart";
import { HomePage } from "./pages/homepage";

export const routes = [
	{
		path: Routes.homepage.create,
		component: HomePage,
	},
	{
		path: Routes.cart.create,
		component: Cart,
	},
];
