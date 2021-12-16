import { createUseStyles } from "react-jss";
import { generateIndex } from "reactjs-view-core";

export default createUseStyles(
	{
		mainHeader: {
			backgroundColor: "#ede9fe",
			width: "100%",
			height: "4.5rem",
			display: "flex",
		},
		ul: {
			listStyle: "none",
			display: "flex",
			width: 100,
			alignItems: "center",
			justifyContent: "center",
		},
		li: {
			margin: "0px 1rem",
			textAlign: "center",
			justifyContent: "center",

			paddingBlock: " 1rem",
			"&:hover": {
				colort: "#6d289d",
			},
		},
		navlink: {
			display: "flex",
			textDecoration: "none",
			flexDirection: "row",
		},
		activeLink: {
			colort: "#6d289d",
			display: "flex",
			textDecoration: "none",
			flexDirection: "row",
			backgroundColor: "#fff",
		},
	},
	{
		index: generateIndex("atoms"),
	},
);
