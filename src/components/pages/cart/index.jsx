import { useNavigate } from "react-router-dom";
import { View, Text } from "reactjs-view";
import {
  useCart,
  useCartActions,
} from "../../../core/constans/provider/cartProvider";
import { Routes } from "../../../core/constans/routes";
import Layout from "../../../Layout";

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
  return (
    <Layout>
      {cart.length ? (
        <View style={{ flexDirection: "row" }}>
          {cart.map((item) => (
            <View style={{ flexDirection: "row", padding: 46 }}>
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  padding: [16, 16],
                  flex: 2,
                  backgroundColor: "#f3f3f3",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingInline: 16,
                }}
              >
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
            </View>
          ))}
          <View style={{ flex: 1 }}>
            <Summary total={total} cart={cart} />
          </View>
        </View>
      ) : (
        <View
          style={{
            marginInline: "auto",
            paddingTop: 80,
          }}
        >
          <Text theme="bold" size="xxlarge">
            cart is empty
          </Text>
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
        paddingInline: 24,
        flex: 1,
        backgroundColor: "#f3f3f3",
        marginInline: 24,
      }}
    >
      <h3>summary</h3>
      <View>
        <Text>total : ${originalTotlaPrice}</Text>
        <Text>discount : {originalTotlaPrice - total}$ </Text>
        <Text>net Price : {total}$ </Text>
      </View>
      <button onClick={() => navigate(Routes.checkout.template())}></button>
    </View>
  );
};
