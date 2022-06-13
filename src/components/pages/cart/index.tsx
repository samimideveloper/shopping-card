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
        <View className={classes.main}>
          <View className={classes.mainHeader}>
            {cart?.map((item) => (
              <View key={item.id} className={classes.header}>
                <img className={classes.img} src={item.image} alt={item.name} />
                <Text>{item.name}</Text>
                <button
                  className={classes.add}
                  onClick={() => AddItemHandler(item)}
                >
                  افزودن
                </button>
                <button className={classes.quantity}>{item.quantity}</button>
                <button
                  className={classes.button}
                  onClick={() => RemoveHandler(item)}
                >
                  حذف
                </button>
              </View>
            ))}
          </View>
          <View>
            <Summary total={total} cart={cart} />
          </View>
        </View>
      ) : (
        <View className={classes.contentWrapper}>
          <Text style={{ paddingInline: 16 }} theme="bold" size="xxlarge">
            هیچی نخریدی
          </Text>
          <button
            style={{ border: "none", cursor: "pointer", width: 100 }}
            onClick={() => navigate(Routes.homepage.create())}
          >
            میرم فروشگاه
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
      <Text size={26} theme="bold">
        مجموع
      </Text>
      <View>
        <Text>کل : ${originalTotlaPrice}</Text>
        <Text>تخفیف : {originalTotlaPrice - total}$ </Text>
        <Text>قیمت نهایی : {total}$ </Text>
      </View>
      <button onClick={() => navigate(Routes.checkout.template())}></button>
    </View>
  );
};
