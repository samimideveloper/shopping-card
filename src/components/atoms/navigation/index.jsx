import { NavLink } from "react-router-dom";
import useStyles from "./style";
import { View, Text } from "reactjs-view";
import { Routes } from "../../../core/constans/routes";

const Navigation = () => {
  const classes = useStyles();
  return (
    <View className={classes.mainHeader}>
      <View style={{ width: 100 }}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.navlink
          }
          to={Routes.homepage.create()}
        >
          <Text color="blue" theme="bold-en" size={16}>
            Home
          </Text>
        </NavLink>
      </View>
      <View style={{ width: 80 }}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.navlink
          }
          to={Routes.cart.create()}
        >
          <Text theme="bold-en" style={{}} size="large">
            Cart
          </Text>
        </NavLink>
      </View>
      <View style={{ width: 80 }}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.navlink
          }
          to={Routes.login.create()}
        >
          <Text theme="bold-en" style={{}} size={16}>
            login / signUp
          </Text>
        </NavLink>
      </View>
    </View>
  );
};
export { Navigation };
