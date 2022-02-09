import { NavLink } from "react-router-dom";
import useStyles from "./style";
import { View, Text } from "reactjs-view";
import { Routes } from "../../../core/constans/routes";

const Navigation = () => {
  const classes = useStyles();
  return (
    <View className={classes.mainHeader}>
      <NavLink
        className={(navData) =>
          navData.isActive ? classes.activeLink : classes.navlink
        }
        to={Routes.homepage.create()}
      >
        <Text size="large">Home</Text>
      </NavLink>
      <View style={{ paddingInline: 16 }}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.navlink
          }
          to={Routes.cart.create()}
        >
          <Text size="large">کارت</Text>
        </NavLink>
      </View>
    </View>
  );
};
export { Navigation };
