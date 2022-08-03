
import { Button } from '@mui/material';
import { Container, ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import Appbar from './components/appbar';
import theme from './styles/theme';
import Banner from './components/banner';
import Products from './components/products';

import Promotions from './components/promotions';


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
          <Appbar/>
          <Banner/>
          <Promotions/>
          <Products/>

          {/* 
          title
          
          footer
          searchbx
          appdawer 
          */}

      </Container>

    </ThemeProvider>

  );
}

export default App;
