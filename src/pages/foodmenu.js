
import * as React from 'react';

import Container from '@mui/material/Container';
import Navbar from './../components/navbar';
import Location from './../components/location';

import Flootbar from './../components/flootbar';
import Typography from '@mui/material/Typography';

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

function foodmenu() {
  return (
    <div className="App">
      <Container style={style.topSection} >
          <Navbar />
        <Location />
      </Container>
      <Box sx={{ background: blueGrey[50]}}>
        <Container sx={{ py: '2rem' }}>
            <Typography variant="h4" component="h1" gutterBottom>FoodMenu</Typography>
        </Container >
      </Box>
      
      <Flootbar /> 
       
       {/* <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> */}
    </div>
  );
}

export default foodmenu;
