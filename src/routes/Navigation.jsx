import React from 'react'
import { Typography, AppBar, Toolbar, IconButton,Stack,Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';


const theme = createTheme({
    palette: {
        primary: {
            main: '#03a9f4',
            main: '#c9a2ff'
        }
    },

})

const style={
    color:'white',
    textDecoration:'none'
}






export default function NavigationComponent(props) {
    const { htp, profile, signup, home, leaderboard } = props.current;

    return (

        <ThemeProvider theme={theme}>
            <AppBar color='primary' position='fixed' sx={{ height: '8vh',display:'flex',flexDirection:'row-reverse'}}>
              

                    <Toolbar>

                    <Typography variant='h6' component='h6' gutterBottom='h6'>
                        <Stack spacing={0.5} direction='row'  >


                        <Button variant="text" >
                                {home ? null :
                                    <NavLink to='/' style={style}>
                                        Home
                                    </NavLink>}
                        </Button>

                            

                        <Button variant='text'>
                           
                                {leaderboard ? null :
                                    <NavLink to='/leaderboard' style={style}>
                                        Leader Board
                                    </NavLink>}
                        </Button>            


                        
                        <Button variant='text' >
                                {htp ? null :
                                    <NavLink to='/howtoplay' style={style}>
                                        How to play
                                    </NavLink>
                                }
                        </Button>   



           
                        <Button variant='text' >
                                {profile ? null :
                                    <NavLink to='/profile-page' style={style}>
                                        User Profile
                                    </NavLink>
                                }
                           </Button> 


                        <Button variant='text' >
                           
                                {signup ? null :
                                    <NavLink to='/registration' style={style}>
                                        Sign Up
                                    </NavLink>
                                }
                        </Button> 



                        </Stack>
                        </Typography>

                    </Toolbar>




             
            </AppBar>
        </ThemeProvider>



    )
}
