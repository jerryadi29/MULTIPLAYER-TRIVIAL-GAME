import React from 'react'
import { Typography, AppBar, Toolbar, IconButton, Stack, Button, Avatar, Menu, Logout, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#03a9f4',
            main: '#c9a2ff'
        }
    },

})

const style = {
    color: 'black',
    textDecoration: 'none'
}






export default function NavigationComponent(props) {
    const { htp, profile, signup, home, leaderboard } = props.current;
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);


    const handleClick = (e) => {
        setAnchor(e.currentTarget);
    }

    const handleClose=()=>{
        setAnchor(null)
    }

    return (

        <ThemeProvider theme={theme}>
            <AppBar color='primary' position='fixed' sx={{ height: '8vh', display: 'flex', flexDirection: 'row-reverse' }}>


                <Toolbar>

                    <Typography variant='h6' component='h6' gutterBottom='h6'>
                        <Stack spacing={4} direction='row'  >


                            <Button variant="text" color='secondary'>
                                {home ? null :
                                    <NavLink to='/' style={style}>
                                        Home
                                    </NavLink>}
                            </Button>



                            <Button variant='text' color='secondary' onClick={handleClose}>

                                {leaderboard ? null :
                                    <NavLink to='/leaderboard' style={style}>
                                        Leader Board
                                    </NavLink>}
                            </Button>



                            <Button variant='text' onClick={handleClose} >
                                {htp ? null :
                                    <NavLink to='/howtoplay' style={style}>
                                        How to play
                                    </NavLink>
                                }
                            </Button>




                            <Avatar sx={{bgcolor:deepOrange[500]}}
                            id='account-btn'
                            onClick={handleClick}
                            aria-controls={open?'account-menu':null}
                            aria-haspopup="true"
                            aria-expanded={open?"true":null}
                            >A</Avatar>


                            <Menu
                                anchorEl={anchor}
                                open={open}
                                onClose={handleClose}
                                id='account-menu'
                                anchorOrigin={{
                                    vertical: 'down',
                                    horizontal: 'down',
                                  }}
                                  transformOrigin={{
                                    vertical: 'down',
                                    horizontal: 'top',
                                  }}
                            >


                              

                                 
                            <MenuItem onClose={handleClose}>
                                    {profile ? null :
                                    <NavLink to='/profile-page' style={style}>
                                        My Game
                                    </NavLink>
                                }
                                </MenuItem>

                                <MenuItem   onClose={handleClose}>
                                    
                                        {signup ? null :
                                            <NavLink to='/registration' style={style}>
                                                Sign In
                                            </NavLink>
                                        }
                                    
                                </MenuItem>

                            </Menu>
                           


                            








                        </Stack>
                    </Typography>

                </Toolbar>





            </AppBar>
        </ThemeProvider>



    )
}
