import { createUseStyles } from "react-jss";
import { generateIndex } from "reactjs-view-core";

export default createUseStyles(
  {
    main: { flexDirection: "row", justifyContent: "space-between" },
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
    button: {
      borderRadius: "4px",
      width: 80,
      border: "none",
      cursor: "pointer",
      height: 30,
    },
    contentWrapper: {
      marginInline: "auto",
      marginBlock: 200,
      flexDirection: "row",
      justifyContent: "center",
    },
    quantity: {
      borderRadius: "4px",
      width: 80,
      border: "none",
      cursor: "pointer",
      height: 30,
      marginInline: 8,
    },
    add: {
      borderRadius: "4px",
      width: 80,
      border: "none",
      cursor: "pointer",
      height: 30,
    },
    img: { width: 100, height: "auto", borderRadius: "10%" },
  },
  {
    index: generateIndex("pages"),
  }
);
