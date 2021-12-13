import { NavLink } from "react-router-dom";
import useStyles from "./style";

const items = [
	{ name: "Home", to: "/" },
	{ name: "Cart", to: "/cart" },
];

const Navigation = () => {
	const classes = useStyles();
	return (
		<div className={classes.mainHeader}>
			<nav style={{ height: "100%", display: "flex" }}>
				{items.map((item) => {
					return (
						<ul className={classes.ul}>
							<li key={item.to} className={classes.li}>
								<NavLink
									className={(navData) =>
										navData?.isActive ? classes.activeLink : classes.navlink
									}
									to={item.to}>
									{item.name}
								</NavLink>
							</li>
						</ul>
					);
				})}
			</nav>
		</div>
	);
};
export { Navigation };
