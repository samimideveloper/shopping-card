import { Routes } from "./core/constans/routes";
import { Navigate, Route, Routes as Switche } from "react-router-dom";
import { HomePage } from "./components/pages/homepage";
import { CartPage } from "./components/pages/cart";
import { View } from "reactjs-view";

function Router() {
  return (
    <View>
      <Switche>
        <Route path="*" element={<Navigate to={Routes.homepage.create()} />} />
        <Route path={Routes.homepage.template()} element={<HomePage />} />
        <Route path={Routes.cart.template()} element={<CartPage />} />
      </Switche>
    </View>
  );
}

export default Router;
