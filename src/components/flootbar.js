import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

import Stack from '@mui/material/Stack';
import { blueGrey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom";

const foodnams = [
    {
        text: 'Newport',
        places: 26,
    },
    {
        text: 'Brooklyn',
        places: 14,
    },
    {
        text: 'Chinatown',
        places: 10,
    },
    {
        text: 'Chelsea',
        places: 20,
    },
    {
        text: 'Coney Island',
        places: 6,
    },
     
]
const about = [
    {
        text: 'Careers',
    },
    {
        text: 'Our Stores',
    },
    {
        text: 'Our Cares',
    },
    {
        text: 'Terms & Conditions',
    },
    {
        text: 'Privacy Policy',
    },
]
const customer = [
    {
        text: 'Help Center',
    },
    {
        text: 'Our Stores',
    },
    {
        text: 'How to Buy',
    },
    {
        text: 'Corporate & Bulk Purchasing',
    },
    {
        text: 'Returns & Refunds',
    },
]
const location = () => { 
    return (
        <Stack spacing={2} key="stack" >
            <Container sx={{ py: '2rem' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                            <Typography sx={{ typography: 'h4', fontWeight: 'bold'}}>
                                Popular Localities In & Around New York
                            </Typography>
                    </Grid>
                    {
                        [...new Array(4)].map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={6} 
                                    key={index}
                                    sx={{ mt: '2rem'}}>
                                    <Stack spacing={2}>
                                        {
                                            foodnams.map((item, index) => {
                                                return ( 
                                                    <Typography sx={{ typography: 'body1'}} key={item.index}>
                                                            <Link style={{ fontWeight: 'bold', color: grey[700], textDecoration: 'none'}} to="/resturanttwocolumn">
                                                            {item.text}
                                                            <Typography component="span" 
                                                                sx={{  typography: 'body1', color: grey[500], pl: '.5rem'}}>
                                                                ({item.places} places)
                                                            </Typography>
                                                             </Link>
                                                    </Typography>
                                                )
                                            })
                                        }
                                    
                                    </Stack>
                                </Grid>
                            )
                            })
                        }
                </Grid>
            </Container>
            <Box sx={{ background: blueGrey[50]}}>
                <Container sx={{ py: '2rem' }}>
                <Grid container spacing={2}
                    >
                    <Grid item xs={12} sm={6} md={3} sx={{ mt: '1rem' }}>
                        <Box
                            component="img"
                            sx={{
                            height: 'auto',
                            width: '4rem',
                            }}
                            alt="F logo"
                            src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png"
                        />
                        <Typography sx={{ typography: 'body1', py: '1rem'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                        </Typography>
                        <Stack
                            spacing={1} direction="row">
                            <Box
                                    component="img"
                                    sx={{
                                    height: 'auto',
                                    width: '6rem',
                                    }}
                                    alt="Google Play"
                                    src="https://foodhub-nuxt.vercel.app/_nuxt/img/google-play.430ca54.png"
                                />
                            <Box
                                component="img"
                                sx={{
                                height: 'auto',
                                width: '6rem',
                                }}
                                alt="Get the Mobile App"
                                src="https://foodhub-nuxt.vercel.app/_nuxt/img/app-store.63e3986.png"
                            />
                    </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ mt: '1rem' }}>
                        <Stack
                            spacing={1}>
                                <Typography sx={{ typography: 'h5'}}>
                                    About Us
                                </Typography>
                                {
                                    about.map((item, index) => {
                                        return (
                                            <Typography sx={{ typography: 'body1'}} key={index}>
                                                {item.text}
                                            </Typography>
                                        )
                                    })
                                }
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ mt: '1rem' }}>
                        <Stack
                            spacing={1}>
                                 <Typography sx={{ typography: 'h5'}}>
                                    Customer Care
                                </Typography>
                                {
                                    customer.map((item, index) => {
                                        return (
                                            <Typography sx={{ typography: 'body1'}} key={index}>
                                                {item.text}
                                            </Typography>
                                        )
                                    })
                                }
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ mt: '1rem' }}>
                        <Stack
                            spacing={1}>
                                 <Typography sx={{ typography: 'h5'}}>
                                    Contact Us
                                </Typography>
                                <Typography sx={{ typography: 'body1'}}>
                                    Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh. Email: uilib@gmail.com Phone: +880 1123 456 780
                                </Typography>
                                <Typography sx={{ typography: 'body1'}}>
                                    Sylhet, Bangladesh.
                                </Typography>
                                <Typography sx={{ typography: 'body1'}}>
                                    Email: uilib@gmail.com
                                </Typography>
                                <Typography sx={{ typography: 'body1'}}>
                                Phone: +880 1123 456 780
                                </Typography>
                                <Stack
                                    spacing={1} direction="row"
                                    sx={{
                                        Button:{
                                            background: '#0f3460', color: grey[50]
                                        },
                                        "Button:hover":{
                                            background: '#0f3460', color: grey[50]
                                        }
                                    }}>
                                        <IconButton aria-label="Facebook">
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton aria-label="Twitter" >
                                            <TwitterIcon />
                                        </IconButton>
                                        <IconButton aria-label="Instagram">
                                            <InstagramIcon />
                                        </IconButton>
                                        <IconButton aria-label="YouTube">
                                            <YouTubeIcon />
                                        </IconButton>
                                        <IconButton aria-label="Google">
                                            <GoogleIcon />
                                        </IconButton>
                                    </Stack>
                        </Stack>
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </Stack>
    );
}
export default location
