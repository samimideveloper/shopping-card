import "./App.css";
import { HomePage } from "./components/pages/homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Cart } from "./components/pages/cart";
import Layout from "./Layout";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/cart" element={<Cart />} />
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
