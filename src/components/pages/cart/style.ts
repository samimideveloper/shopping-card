import { createUseStyles } from "react-jss";
import { generateIndex } from "reactjs-view-core";

export default createUseStyles(
	{
		mainHeader: {
			flexDirection: "row",
			overflowX: "hidden",
		},
		header: {
			padding: [16, 16],
			backgroundColor: "#f3f3f3",
			alignItems: "center",
			justifyContent: "space-between",
			width: 300,
			flexDirection: "row",
			flexWrap: "wrap",
		},
	},
	{
		index: generateIndex("pages"),
	},
);
