import "./App.css";
import { HomePage } from "./components/pages/homepage";
import {
  Routes as Switche,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { CartPage } from "./components/pages/cart";
import { CheckOut } from "./components/pages/checkout";
import { Routes } from "./core/constans/routes";
import CartProvider from "./core/constans/provider/cartProvider";
import "antd/dist/antd.css";
import { Login } from "./components/pages/login/login";
import { SignUp } from "./components/pages/signup";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Switche>
          <Route path="*" element={<Navigate to={Routes.login.create()} />} />
          <Route path={Routes.cart.template()} element={<CartPage />} />
          <Route path={Routes.homepage.template()} element={<HomePage />} />
          <Route path={Routes.checkout.template()} element={<CheckOut />} />
          <Route path={Routes.login.template()} element={<Login />} />
          <Route path={Routes.signup.template()} element={<SignUp />} />
        </Switche>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
