import { useState, ReactElement } from "react";
import "./assets/css/App.css";
import HeaderBar from "./Header";
import logo from "./assets/pics/logodark.png";
import Menu from "./Drawer";
import { Container, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Dashboard from "./Dashboard/Dashboard";
import Users from "./Users/Users";
import Prendi from "./Prendi/Prendi";
import Cedi from "./Cedi/Cedi";

export const BASE_URL = "http://localhost:3000";

export const enum CONTEXT {
  DASHBOARD = "Dashboard",
  CEDI = "Lend",
  PRENDI = "Take",
  UTENTI = "User",
}

function App(): ReactElement {
  const [context, setContext] = useState(CONTEXT.DASHBOARD);
  let ContextDiv;

  switch (context) {
    case CONTEXT.DASHBOARD:
      ContextDiv = <Dashboard />;
      break;
    case CONTEXT.CEDI:
      ContextDiv = <Cedi/>
      break;
    case CONTEXT.PRENDI:
      ContextDiv = <Prendi />;
      break;
    case CONTEXT.UTENTI:
      ContextDiv = <Users />;
      break;
  }

  const handleContext = function (context: CONTEXT): void {
    setContext((currContext) => (currContext = context));
  };

  return (
    <>
      <HeaderBar logo={logo} context={context}></HeaderBar>
      <Divider></Divider>
      <Box sx={{ display: "flex" }}>
        <Menu handleContext={handleContext}></Menu>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.grey[theme.palette.mode === "light" ? 400 : 900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, overflow: "auto" }}>
            {ContextDiv}
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
