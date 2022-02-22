import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'
import Stack from '@mui/material/Stack';

import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

const getmore = () => { 
    return (
       <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center'}}>
            <Box
                component="img"
                sx={{
                height: 'auto',
                width: '12rem',
                }}
                alt="Get the Mobile App"
                src="https://foodhub-nuxt.vercel.app/_nuxt/img/App.4927ff9.png"
            />
            </Grid>
            <Grid  item xs={12} sm={6} md={8}>
                <Typography sx={{ typography: 'h4', fontWeight: 'bold'}}>
                    Get the Mobile App
                </Typography>
                <Typography sx={{ typography: 'body1'}}>
                    We will send you a link, open it on your phone to download the app
                </Typography>
                <FormControl sx={{ display: 'flex' }}>
                    <FormLabel id="email-phone">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="email-phone"
                        name="email-phone"
                    >
                        <FormControlLabel value="Email" control={<Radio />} label="Email" />
                        <FormControlLabel value="Phone" control={<Radio />} label="Phone" />
                    </RadioGroup>
                    <Stack
                        spacing={0} direction="row">
							
							<InputBase
								sx={{ background: grey[50], px: 1, maxWidth: 500 }}
								placeholder="Email"
								inputProps={{ 'aria-label': 'Email' }}
                                fullWidth
							/>
                            <Button variant="contained" sx={{background: red[700]}}>Search</Button>
							
						</Stack>
                </FormControl>
                <Typography sx={{ typography: 'body2', color: grey[500], py: '1rem'}}>
                     Download App from
                </Typography>
                <Stack
                        spacing={1} direction="row">
                       <Box
                            component="img"
                            sx={{
                            height: 'auto',
                            width: '9rem',
                            }}
                            alt="Google Play"
                            src="https://foodhub-nuxt.vercel.app/_nuxt/img/google-play.430ca54.png"
                        />
                        <Box
                            component="img"
                            sx={{
                            height: 'auto',
                            width: '9rem',
                            }}
                            alt="Get the Mobile App"
                            src="https://foodhub-nuxt.vercel.app/_nuxt/img/app-store.63e3986.png"
                        />
                </Stack>
           </Grid>
       </Grid>
    );
}
export default getmore