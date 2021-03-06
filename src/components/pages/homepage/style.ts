import { createUseStyles } from "react-jss";
import { generateIndex } from "reactjs-view-core";

export default createUseStyles(
  {
    container: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "50px",
    },
    productList: {
      paddingBlock: 20,
      justifyContent: "center",
      borderRadius: "10px",
      flexDirection: "row",
      maxWidth: "100%",
      overflowX: "hidden",
      flexWrap: "wrap",
    },
    product: {
      borderRadius: "10%",
      backgroundColor: "grey",
      width: "fit-content",
      paddingInline: 10,
      marginInline: 16,
      marginBlock: 12,
    },
    content: {
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    productButton: {
      borderRadius: "4px",
      width: 80,
      border: "none",
      cursor: "pointer",
    },
  },
  { index: generateIndex("pages") }
);
