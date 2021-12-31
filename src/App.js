import "./App.css";
import { HomePage } from "./components/pages/homepage";
import {
	Routes as Switche,
	Route,
	BrowserRouter,
	Navigate,
} from "react-router-dom";
import { CartPage } from "./components/pages/cart";
import {Routes} from "./core/constans/routes";
import  CartProvider  from "./core/constans/provider/cartProvider";
import 'antd/dist/antd.css';


function App() {
	return (
		<BrowserRouter>
		<CartProvider>
				<Switche>
					<Route path="*" element={<Navigate  to={Routes.homepage.create()} />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/homepage" element={<HomePage />} />
				</Switche>
				</CartProvider>
		</BrowserRouter>
	);
}

export default App;
