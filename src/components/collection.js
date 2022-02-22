import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { grey, red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

const bestmenu = [
    {
        text: 'Most Searched of 2020',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/5.8a5927f.png',
    },
    {
        text: 'Best Openings of 2020',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/6.729f74b.png',
    },
    {
        text: 'Trending This Week',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/7.ea86fb7.png',
    },
    {
        text: 'Best Of New York',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/8.d53c60b.png',
    }
]
const cuisine  = [
    {
        text: 'Italian',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/9.1c1a4aa.png',
    },
    {
        text: 'Chinesse',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/10.4b83261.png',
    },
    {
        text: 'Japanesse',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/11.53f677b.png',
    },
    {
        text: 'Indian',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/12.95a2711.png',
    },
    {
        text: 'Thai Food',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/10.4b83261.png',
    },
    {
        text: 'Mexican',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/14.05cff0f.png',
    }
]
const foodmenu = [
    {
        text: 'Starbucks',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg',
    },
    {
        text: 'Mughal',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg',
    },
    {
        text: 'Woondal',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/17.3634737.jpg',
    },
    {
        text: 'Red Chillies',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/18.2a12c1e.jpg',
    },
    {
        text: 'Starbucks',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/19.a1e7280.jpg',
    },
    {
        text: 'Mughal',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/20.ce4b89f.jpg',
    },
    {
        text: 'Woondal',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/21.eee29b5.jpg',
    },
    {
        text: 'Red Chillies',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/22.c99d20e.jpg',
    }
]
const location = () => { 
    return (
       <Grid container >
           <Grid container  spacing={2} sx={{py:'2rem'}}>

           <Grid item xs={12} sm={8} md={10}>
                <Typography sx={{ typography: 'h5', fontWeight: 'bold'}}>
                    Collections
                </Typography>
                <Typography sx={{ typography: 'body2', color: grey[500] }}>
                    Explore curated lists of top restaurants, cafes, pubs, and bars in New York, based on trends
                </Typography>
           </Grid>
           <Grid item xs={12} sm={4} md={2}>
                <Typography gutterBottom sx={{ fontWeight: 'bold', typography: 'body1', textAlign:'right', color: red[500] }}>
                    View all collections
                </Typography>
           </Grid>
            {bestmenu.map((item, index) => {
                return(
                <Grid item xs={12} sm={6} md={3} key={item['text']}>
                    <Link style={{ textDecoration: 'none'}}to="/foodmenu">
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardActionArea sx={{ 
                            background: `linear-gradient(rgba(0, 0, 0, 0) 80%, rgb(0, 0, 0)), url("${item['imagesrc']}") `,
                            backgroundSize: 'cover'}}>
                            <Box sx={{ height: '14rem' }}></Box>
                            <CardContent>
                            <Typography sx={{ color: grey[50],typography:'body1', fontWeight: 'bold'}}>
                                {item['text']}
                            </Typography>
                            <Typography sx={{ color: grey[100],typography:'body2'}} >
                                30 Places <ArrowForwardIosIcon sx={{ fontSize: '.75rem', verticalAlign: 'baseline'}}  />
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </Link>
                 </Grid>
                )
            })}
           </Grid>
            <Grid container  spacing={2} sx={{py:'2rem'}}>
                
            <Grid item xs={12} sm={12} md={12}>
                <Typography sx={{ typography: 'h5', fontWeight: 'bold'}}>
                    Browse By Cuisine
                </Typography>
            </Grid>
            {cuisine.map((item, index) => {
                    return(
                    <Grid item xs={12} sm={4} md={2} key={item['text']}>
                    <Link style={{ textDecoration: 'none'}}to="/foodmenu">
                        <Card sx={{ maxWidth: '100%', boxShadow: 'none' }}>
                            <CardActionArea>
                            <CardMedia
                                    sx={{ objectFit: 'contain', height: '9rem' }}
                                    style={ index === 4 ? { transform: 'rotate(120deg)',}: { }}
                                    component="img"
                                    width="auto"
                                    image={`${item['imagesrc']}`}
                                    alt={`${item['text']}`}/>
                                <CardContent>
                                <Typography sx={{ 
                                    typography:'body1',
                                    fontWeight: 'bold',
                                    textAlign: 'center'}}>
                                    {item['text']}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                    </Link>
                    </Grid>
                    )
                })}
            </Grid>

            <Grid container  spacing={2} sx={{py:'2rem'}}>
                <Grid item  xs={12} sm={12} md={12}>
                    <Typography sx={{ typography: 'h5', fontWeight: 'bold'}}>
                        Popular Near You
                    </Typography>
                </Grid>
                {foodmenu.map((item, index) => {
                    return(
                    <Grid item xs={12} sm={6} md={3} key={item['text']+index}>
                          <Link style={{ textDecoration: 'none'}}to="/foodmenu">
                            <Card sx={{ maxWidth: '100%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item['imagesrc']}
                                        alt={item['text']}
                                    />
                                    <CardContent>
                                    <Typography sx={{ typography:'body1',  fontWeight: 'bold'}}>
                                        {item['text']}
                                    </Typography>
                                    <Typography sx={{ typography:'body1',  fontWeight: 'bold'}}>
                                        <Box component="span"
                                            sx={{color: red[500], pr: '.5rem'}}>$20</Box>
                                        <Box component="span" 
                                            sx={{ typography:'body2', color: grey[500]}}> 
                                            • Cofee, set menu • 15 - 20 min </Box>
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Card>
                          </Link>
                    </Grid>
                    )
                })}           
            </Grid>           
       </Grid>
    );
}
export default location