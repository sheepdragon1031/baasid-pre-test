import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

const foodmenu = [
    {
        text: 'Order Food Online',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg',
    },
    {
        text: 'Go Out For Meal',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg',
    },
    {
        text: 'Nightlife & Clubs',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/17.3634737.jpg',
    },
    {
        text: 'Pro Membership',
        imagesrc: 'https://foodhub-nuxt.vercel.app/_nuxt/img/18.2a12c1e.jpg',
    }
]
const location = () => { 
    return (
       <Grid container spacing={2}>
            {foodmenu.map((item, index) => {
                return(
                <Grid item xs={12} sm={6} md={3} key={item['text']}>
                <Link to="/foodmenu" style={{ textDecoration: 'none'}}>
                    <Card sx={{ maxWidth: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item['imagesrc']}
                                alt={item['text']}
                            />
                            <CardContent>
                            <Typography sx={{ textAlign: 'center' , typography:'h6',  fontWeight: 'bold'}}>
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
    );
}
export default location