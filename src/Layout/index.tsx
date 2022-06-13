import { Navigation } from "../components/atoms/navigation";
import { View } from "reactjs-view";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <View>
      <Navigation />
      {children}
    </View>
  );
};
export default Layout;
