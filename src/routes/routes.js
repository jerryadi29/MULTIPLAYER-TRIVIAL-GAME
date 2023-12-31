import React, { Suspense, lazy } from 'react'
import LeaderBoardComponent from '../component/leaderboard';
import { LoginComponent } from '../component/login';
import { RegistrationComponent } from '../component/registration';
import HomeComponent from '../component/home';
import GameComponent from '../component/game';
import { HowTopPlayComponent } from '../component/howtoplay';
import ProfileComponent from '../component/profile';
import { Route, Routes } from 'react-router-dom';
import NavigationComponent from './Navigation';
import { Typography } from '@mui/material';
import FeedbackComponent from '../component/feedback';



const LazyGameComponent = lazy(() => import('../component/game'))


export default function RoutesComponent() {
  return (
    <>
      <NavigationComponent current={{ home: false, htp: false, leaderboard: false, profile: false, signup: false }}></NavigationComponent>



      <Routes>
        <Route path='/' element={<HomeComponent></HomeComponent>} >

        </Route>

        <Route path='registration' element={<RegistrationComponent></RegistrationComponent>} />
        <Route path='login' element={<LoginComponent></LoginComponent>}></Route>
        <Route path='leaderboard' element={<LeaderBoardComponent></LeaderBoardComponent>}></Route>

        <Route path='howtoplay' element={<HowTopPlayComponent></HowTopPlayComponent>}></Route>

        <Route path='profile-page' element={<ProfileComponent></ProfileComponent>}>

        </Route>
        <Route path='profile-page/:gameId' element={
          <Suspense fallback='Loading.....'>
            <LazyGameComponent></LazyGameComponent>
          </Suspense>


        } />

        <Route path='feedback' element={
          <FeedbackComponent>

          </FeedbackComponent>} />




      </Routes>

    </>

  )
}


