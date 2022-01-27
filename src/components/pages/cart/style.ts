import { createUseStyles } from "react-jss";
import { generateIndex } from "reactjs-view-core";

export default createUseStyles(
  {
    mainHeader: {
      overflowX: "hidden",
    },
    header: {
      padding: [16, 16],
      backgroundColor: "#f3f3f3",
      alignItems: "center",
      justifyContent: "space-between",
      width: 600,
      flexDirection: "row",

      marginBlock: 16,
      marginInline: 16,
    },
  },
  {
    index: generateIndex("pages"),
  }
);
