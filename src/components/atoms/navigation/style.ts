import { createUseStyles } from "react-jss";
import { generateIndex } from "reactjs-view-core";

export default createUseStyles(
	{
		mainHeader: {
			backgroundColor: "#ede9fe",
			width: "100%",
			height: "4.5rem",
			flexDirection: "row",
			alignItems: "center",
			top: 0,
			position: "sticky",
			zIndex: 99,
			textAlign: "center",
			padding: 24,
      justifyContent:"center"
		},

		navlink: {
			display: "flex",
			textDecoration: "none",
			flexDirection: "row",
			textAlign: "center",
		},
		activeLink: {
			color: "#6d289d",
			textDecoration: "none",
			backgroundColor: "#fff",
			textAlign: "center",
			alignItems: "center",
		},
	},
	{
		index: generateIndex("atoms"),
	},
);
