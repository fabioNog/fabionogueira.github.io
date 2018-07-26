import {
  drawerWidth,
  transition,
  container
} from "assets/jss/material-dashboard-react.jsx";

import ImgDashboard from "assets/img/sidebar-1.jpg";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  cardPrincipal: {

  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",

  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
    // backgroundImage: `url(${ImgDashboard})`,
    backgroundColor: "white",
    backgroundSize: 'cover',
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
