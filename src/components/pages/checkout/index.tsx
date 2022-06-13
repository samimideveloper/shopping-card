import { View, Text } from "reactjs-view";
import { useCart } from "../../../core/constans/provider/cartProvider";

const CheckOut = () => {
  const total = useCart();
  return (
    <View>
      <Text theme="bold">صفحه پرداخت</Text>
      <Text theme="bold">{total} </Text>
    </View>
  );
};
export { CheckOut };
