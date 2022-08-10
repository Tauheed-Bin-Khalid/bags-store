// import logo from "./logo.svg";
import "./App.css";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Banner from "./components/banner";
import Products from "./components/products";
import { UIProvider } from "./context/ui";

import Promotions from "./components/promotions";
// import SearchBox from "./components/search";
import { useEffect } from "react";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";


function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: '#fff'
        }} >
          <UIProvider>
            
          <Appbar/>
          <Banner/>
          <Promotions/>
          <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
          <Products/>
          <Footer/>
          <AppDrawer/>

          {/* 
          footer
          searchbx
          appdawer 
          */}
          </UIProvider>

      </Container>

    </ThemeProvider>

  );
}

export default App;
