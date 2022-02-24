import { createUseStyles } from "react-jss";
import { generateIndex } from "reactjs-view-core";

export default createUseStyles(
  {
    main: {
      marginInline: "auto",
      justifyContent: "center",
      alignItems: "center",
      height: "600px",
    },
  },
  { index: generateIndex("pages") }
);
