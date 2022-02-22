import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { red, grey } from '@mui/material/colors';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Zoom from '@mui/material/Zoom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const navbarList = ['Dashboards', 'Resturant'];


const ResponsiveAppBar = (props) => {
  const [open, setOpen] = React.useState([true, true]);
  const [state, setState] = React.useState({  
    left: false,
    right: false,
  });
  const [shopcar, setShopCar] = React.useState([
    {
    id: 1,
    name: 'Coffee',
    src: 'https://foodhub-nuxt.vercel.app/_nuxt/img/1.d289046.png',
    price: '10',
    qty: 1
  },
    {
      id: 2,
      name: 'Mughal',
      src: 'https://foodhub-nuxt.vercel.app/_nuxt/img/2.2633985.png',
      price: '20',
      qty: 1
    },
  ]);

  const handleClick = ( index ) => {
    
    let temp = [...open];
    temp[index] = !temp[index];
    setOpen(temp);
  };


  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log(state, anchor);
    setState({ ...state, [anchor]: open });
  };

  const shop = (anchor) => (
    <Box sx={{ width: 320 , height: '100%'}}>
          <List
          
          subheader={
            <ListSubheader sx={{mt: 2, mb: 0}} component="div" id="shop">
              <ShoppingCartIcon />
              <Typography variant='h5' component="span">Item</Typography>
            </ListSubheader>}
            >
              <Divider /> 
             <List>
             {
                shopcar.map( (item, index) => (
                  <ListItem key={item['name']}>
                    <ListItemAvatar sx={{ pr: '1rem'}}>
                       <Avatar sx={{width: '5rem', height: '5rem'}}>
                       <Box
                            component="img"
                            alt={item['name']}
                            src={item['src']}
                        />
                       </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                    primary={item['name']} 
                    secondary={`$${item['price']} x ${item['qty']}`} />
                    <Stack>
                        <IconButton aria-label="+" onClick={()=>{
                          let temp = [...shopcar];
                          temp[index]['qty'] = temp[index]['qty'] + 1;
                          setShopCar(temp);
                        }}>
                          <AddIcon />
                        </IconButton>
                        <Typography sx={{ textAlign: 'center'}}>
                          {item['qty']}
                        </Typography>
                        <IconButton aria-label="-"onClick={()=>{
                          let temp = [...shopcar];
                          temp[index]['qty'] > 0 ? temp[index]['qty'] = temp[index]['qty'] - 1: temp.splice(index, 1);
                          setShopCar(temp);
                        }}>
                          <RemoveIcon />
                        </IconButton>
                    </Stack>
                    
                  </ListItem> 
                ))
             }
             <ListItem>
                <Button
                  sx={{ background: red[700]}}
                  variant="contained"
                  fullWidth
                >
                  Checkout Now ($ {shopcar.reduce((accumulator, current) => accumulator + current.qty * current.price, 0)})</Button>
              </ListItem>
             </List>
             
            </List>
    </Box>
  )

  const list = (anchor) => (
    <Box
      sx={{ width: 320 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
       subheader={
        <ListSubheader sx={{mt: 2, mb: 0}} component="div" id="list">
          <Typography variant='h5'>Navbar</Typography>
        </ListSubheader>
      } />
      {/* <Divider /> */}
      
        {navbarList.map((text, index) => (
          <List  key={text}>
          <ListItem>
            <ListItemButton onClick={() => {handleClick(index)}} >
              <ListItemIcon>
                {index % 2 === 0 ? <DashboardIcon /> : <RestaurantIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
              {open[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={open[index]} timeout="auto" unmountOnExit>
            {index === 0 ? 
            ['Review','Photos','Order List','Followers','Bookmarks'].map((text, index) => {
              return (
                <List component="div" disablePadding key={`coll-${text}`}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={`${text}`} />
                  </ListItemButton>
              </List>
              )
            }) : ['Food Menu','Resturant Two Column','Search Resturant'].map((text, index) => {
              return (
                <List component="div" disablePadding key={`coll-${text}`}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={`${text}`} />
                  </ListItemButton>
              </List>
              )
            })}
          </Collapse>
        </List>
        ))}
      
    </Box>
  );
  
  function ScrollTop(props) {

    const { children, window } = props;
   
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
     
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
      console.log(anchor);
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
  
    return (
      <Zoom in={trigger} >
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  
 
  
  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ background: 'rgba(0, 0, 0, 0)', color: grey[50], boxShadow: 'none'}}>
        <Container maxWidth="xl">
          <Toolbar id="back-to-top-anchor" disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { md: 'flex' } }}
            >
               <Box
                    component="img"
                    sx={{
                    height: 'auto',
                    width: '3rem',
                    }}
                    alt="F logo"
                    src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png"
                />
            </Typography>

            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))} */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={toggleDrawer('right', true)} size="large"
                  edge="start"
                  color="inherit"
                  aria-label="Account"
                  sx={{ mr: 2 }}>
                  <AccountCircleOutlinedIcon />
                  <Typography sx={{ml: '1rem'}} component="span">Account</Typography>
             </IconButton>

              <Tooltip title="Open Order">
                <IconButton onClick={toggleDrawer('right', true)} size="large"
                  edge="start"
                  color="inherit"
                  aria-label="Open Order"
                  sx={{ mr: 2 }}>
                  <ShoppingCartIcon />
                  <Typography component="span">({shopcar.length})</Typography>
                </IconButton>
              </Tooltip>

              <Tooltip title="Open settings">
                <IconButton onClick={toggleDrawer('left', true)} size="large"
                  edge="start"
                  color="inherit"
                  aria-label="Open settings"
                  sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton>
              </Tooltip>

              
              {['left', 'right'].map((anchor , index) => (
                
                  <Drawer
                    key={anchor}
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                      { anchor === "left" ? list(anchor): shop(anchor)}
                  </Drawer>
              ))}
            
            </Box>
          </Toolbar>
        </Container>
        
      </AppBar>
      <ScrollTop {...props} >
        <Fab size="small" aria-label="scroll back to top" 
            sx={{ background: red[700] , 
              ":hover":{
              background: red[600]
              }, color: grey[50]}} >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
     
    </React.Fragment>
  );
};
export default ResponsiveAppBar;
