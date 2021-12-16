import "./App.css";
import { HomePage } from "./components/pages/homepage";
import {
	Routes as Switche,
	Route,
	BrowserRouter,
	Navigate,
} from "react-router-dom";
import { Cart } from "./components/pages/cart";
import Layout from "./Layout";
import {Routes} from "./core/constans/routes";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switche>
					{/* <Route path="*" element={<Navigate replace to={Routes.HomePage.create()} />} /> */}
					<Route path="/cart" element={<Cart />} />
					<Route path="/homepage" element={<HomePage />} />
				</Switche>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
