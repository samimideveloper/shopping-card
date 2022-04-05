import { createUseStyles } from "react-jss";
import { generateIndex } from "reactjs-view-core";

export default createUseStyles(
  {
    main: {
      width: 400,
      marginInline: "auto",
      marginBlock: "auto",
      paddingTop: 50,
    },
  },
  { index: generateIndex("pages") }
);
