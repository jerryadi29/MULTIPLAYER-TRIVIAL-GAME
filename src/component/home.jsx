import React from 'react'
import NavigationComponent from '../routes/Navigation'
import { Link, Outlet } from 'react-router-dom'
import GameComponent from './game'

export default function HomeComponent() {
    return (
        <>

            <div>home</div>

            <Link to='/profile-page'>lets play</Link>
            
                    
                
           


        </>

    )
}
