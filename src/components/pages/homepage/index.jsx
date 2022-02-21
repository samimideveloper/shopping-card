import Layout from "../../../Layout";
import * as data from "../../../core/constans/data";
import useStyles from "./style";
import { Text, View } from "reactjs-view";
import {
  useCart,
  useCartActions,
} from "../../../core/constans/provider/cartProvider";
import { checkInCart } from "../../../core/constans/utils/chekInCart";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../core/constans/routes";
import { notification } from "antd";

const HomePage = () => {
  const navigation = useNavigate();
  const { cart } = useCart();
  const classes = useStyles();
  const dispatch = useCartActions();
  const addProduct = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <View className={classes.container}>
        <View className={classes.productList}>
          {data.products.map((product) => {
            return (
              <View className={classes.product} key={product.id}>
                <View style={{ padding: 8 }}>
                  <img
                    style={{ width: 200, height: "auto", borderRadius: "10%" }}
                    src={product?.image}
                    alt={product?.name}
                  />
                </View>
                <View className={classes.content}>
                  <Text>{product?.name}</Text>
                  <Text>$ {product?.price}</Text>
                  <button
                    onClick={() => {
                      addProduct(product);
                    }}
                    className={classes.productButton}
                  >
                    {checkInCart(cart, product) ? (
                      <Text
                        size={14}
                        style={{ alignItems: "center" }}
                        onClick={() => {
                          navigation(Routes.cart.create());
                        }}
                      >
                        برو به فروشگاه
                      </Text>
                    ) : (
                      <Text theme="bold" size={14}>
                        اضافه کردن به سبد خرید
                      </Text>
                    )}
                  </button>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </Layout>
  );
};
export { HomePage };
