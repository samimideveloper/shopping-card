import { createUseStyles } from "react-jss";
import { generateIndex } from "reactjs-view-core";

export default createUseStyles(
  {
    main: {
      marginInline: "auto",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "rgb(255,255,255)",
      background:
        " linear-gradient(275deg, rgba(255,255,255,1) 0%, rgba(233,123,126,1) 37%, rgba(255,255,255,1) 100%)",
    },
  },
  { index: generateIndex("pages") }
);
