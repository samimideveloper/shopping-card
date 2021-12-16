import { createUseStyles } from "react-jss";

export default createUseStyles({
	container: {
		display: "flex",
		justifyContent: "center",
		marginTop: "50px",
	},
	productList: {
		paddingBlock: 20,
		display: "flex",
		borderRadius: "10px",
		flexWrap: "wrap",
		//  display: "grid",
		gridTemplateColumns: "repeat (auto-fit,minmax(260px,1fr))",
		gridColumnGap: "5rem",
		gridRowGap: "3rem",
		maxWidth: "1170px",
		width: "90vw",
	},
	product: {
		borderRadius: "10%",
		display: "flex",
		flexDirection: "column",
		backgroundColor: "blueviolet",
	},
	content: {
		padding: 10,
        display:"flex",
        justifyContent:"space-between"
	},
});
