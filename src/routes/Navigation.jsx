import React from 'react'
import { NavLink } from 'react-router-dom';






export default function NavigationComponent(props) {
    const {htp,profile,signup,home,leaderboard}=props.current;
    console.log(props.current)
    return (


        <nav>
            {home ? null :
                <NavLink to='/'>
                    Home
                </NavLink>}

            {leaderboard ? null :
                <NavLink to='/leaderboard'>
                    Leader Board
                </NavLink>}

            {htp ? null :
                <NavLink to='/howtoplay'>
                    How to play
                </NavLink>
            }

            {profile ? null :
                <NavLink to='/profile-page'>
                    User Profile
                </NavLink>
            }

            {signup ?null :
                <NavLink to='/registration'>
                Sign Up
            </NavLink>
            }
          
        </nav>






    )
}
