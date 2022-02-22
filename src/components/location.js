import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { grey, red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Paper from '@mui/material/Paper';

const location = () => { 
    return (
        <Container sx={{ textAlign: 'center', color: grey[50], mt: '10rem', pb: '2rem' }} key="location">
            <Typography sx={{ typography:'h3' }}>
                <Box component="span" >Discover the best food & drinks in </Box>
                <Box component="span" sx={{ fontWeight: 'bold' }}> New York</Box >
            </Typography>
            <Typography sx={{ typography:'h6' }}>The meals you love, delivered with care</Typography>
            <FormControl sx={{ display: 'flex', py: '2rem'}}>
                    <Paper sx={{ m: 'auto', maxWidth: '60rem', background: grey[50]}}>
                    <Stack
                        sx={{m: 'auto', "svg":{ mr: '.5rem'} , flexDirection: {  sm: 'column', md: 'row'} }}
                        spacing={0}>
                            <Typography component="div" 
                                sx={{ typography: 'body1', minWidth: '10rem', color: grey[500], lineHeight: '3rem'}}>
                                <LocationOnIcon sx={{verticalAlign: 'sub'}}/>
                                New York
                            </Typography>

                            <Button variant="contained" 
                                sx={{ background: grey[50], color: grey[500],  minWidth: '10rem',
                                ":hover": { background: grey[200]}}}>
                                <MyLocationIcon />
                                <Typography component="span" sx={{ typography: 'body1' }}>
                                    Locate me
                                </Typography>
                            </Button>
							<InputBase
								sx={{ background: grey[50], px: 1, width: { xs: 300 , sm: 300, md:320 }, minWidth: 100 }}
								placeholder="Search for restaurant "
                                name="search"
                                // fullWidth
							/>
                            <Button variant="contained" sx={{background: red[700], px: '2rem'}}>Search</Button>
							
						</Stack>
                    </Paper>
                </FormControl>
            <Stack spacing={1} direction="row">

            </Stack>
        </Container>
    );
}
export default location