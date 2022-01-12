import { Navigation } from "../components/atoms/navigation";
import { View } from "reactjs-view";

const Layout = ({ children }) => {
  return (
    <View>
      <Navigation />
      {children}
    </View>
  );
};
export default Layout;
