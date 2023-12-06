import { useState } from "react";
import "./assets/css/App.css";
import HeaderBar from "./Header";
import logo from "./assets/pics/logodark.png";
import Menu from "./Drawer";
import { Container, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';
import Books from "./Books";

function App() {
  const [context, setContext] = useState("Dashboard");
  let ContextDiv;

  switch (context) {
    case "Dashboard":
      ContextDiv = <Books></Books>;
      break;
    case "Cedi":
      break;
    case "Prendi":
      break;
    case "Utenti":
      break;
  }

  const handleContext = function (c: string): void {
    setContext((context) => (context = c));
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
              theme.palette.mode === 'light'
                ? theme.palette.grey[400]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {ContextDiv}
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
