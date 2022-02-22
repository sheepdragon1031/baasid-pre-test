
import * as React from 'react';

import Container from '@mui/material/Container';

import Navbar from './../components/navbar';
import Location from './..//components/location';
import Foodmenu from './../components/foodmenu';
import Collection from './../components/collection';
import Getmore from './../components/getmore';
import Flootbar from './../components/flootbar';

import { Box } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
const style = {
  topSection:{
    with: '100vw',
    maxWidth: '100vw',
    backgroundImage: 'url(https://foodhub-nuxt.vercel.app/_nuxt/img/header-bg.d39c465.png)',
    backgroundsizex: 'cover',
  }
}

function Index() {
  return (
    <div className="App">
      <Container style={style.topSection} >
          <Navbar />
        <Location />
      </Container>
      <Box sx={{ background: blueGrey[50]}}>
        <Container sx={{ py: '2rem' }}>
          <Foodmenu />
        </Container >
      </Box>
      <Container sx={{ py: '2rem' }}>
          <Collection />
      </Container >
      <Box sx={{ background: blueGrey[50]}}>
        <Container sx={{ py: '2rem' }}>
          <Getmore />
        </Container >
      </Box>
      
      <Flootbar /> 
    </div>
  );
}

export default Index;
