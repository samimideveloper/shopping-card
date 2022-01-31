import { useNavigate } from "react-router-dom";
import { View, Text } from "reactjs-view";
import {
  useCart,
  useCartActions,
} from "../../../core/constans/provider/cartProvider";
import { Routes } from "../../../core/constans/routes";
import Layout from "../../../Layout";
import useStyles from "./style";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  const navigate = useNavigate();
  const AddItemHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const RemoveHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };
  const classes = useStyles();
  return (
    <Layout>
      {cart.length ? (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View className={classes.mainHeader}>
            {cart.map((item) => (
              <View key={item.id} className={classes.header}>
                <img
                  style={{ width: 100, height: "auto", borderRadius: "10%" }}
                  src={item.image}
                  alt={item.name}
                />
                <Text>{item.name}</Text>
                <button
                  style={{
                    borderRadius: "4px",
                    width: 80,
                    border: "none",
                    cursor: "pointer",
                    height: 30,
                  }}
                  onClick={() => AddItemHandler(item)}
                >
                  ADD
                </button>
                <button
                  style={{
                    borderRadius: "4px",
                    width: 80,
                    border: "none",
                    cursor: "pointer",
                    height: 30,
                    marginInline: 8,
                  }}
                >
                  {item.quantity}
                </button>
                <button
                  style={{
                    borderRadius: "4px",
                    width: 80,
                    border: "none",
                    cursor: "pointer",
                    height: 30,
                  }}
                  onClick={() => RemoveHandler(item)}
                >
                  remove
                </button>
              </View>
            ))}
          </View>
          <View>
            <Summary total={total} cart={cart} />
          </View>
        </View>
      ) : (
        <View
          style={{
            marginInline: "auto",
            paddingTop: 80,
            flexDirection: "row",
          }}
        >
          <Text style={{ paddingInline: 16 }} theme="bold" size="xxlarge">
            cart is empty
          </Text>
          <button
            style={{ border: "none", cursor: "pointer" }}
            onClick={() => navigate(Routes.homepage.create())}
          >
            GO to Shop
          </button>
        </View>
      )}
    </Layout>
  );
};

export { CartPage };

export const Summary = ({ total, cart }) => {
  const navigate = useNavigate();

  const originalTotlaPrice = cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    : 0;
  return (
    <View
      style={{
        marginBlock: 16,
        width: 300,
        paddingInline: 24,
        backgroundColor: "#f3f3f3",
        marginInline: 24,
        height: 200,
      }}
    >
      <h3>summary</h3>
      <View>
        <Text>کل : ${originalTotlaPrice}</Text>
        <Text>تخفیف : {originalTotlaPrice - total}$ </Text>
        <Text>قیمت نهایی : {total}$ </Text>
      </View>
      <button onClick={() => navigate(Routes.checkout.template())}></button>
    </View>
  );
};
