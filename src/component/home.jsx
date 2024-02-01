import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Grid, Typography,Box,Button } from '@mui/material';
import { SpeedInsights } from "@vercel/speed-insights/react";



export default function HomeComponent() {

        let navigate=useNavigate();

    return (
        <>
                <SpeedInsights></SpeedInsights>

                <Box sx={{
                    height: '80vh',
                    width: '100vw',
                
                
                }}>

               


            <Grid container direction='column'  justifyContent="space-around" alignItems="center" rowSpacing={1} height='40rem' width='80%'margin= '2% 10% 2%'>

                <Grid item xs={1} borderRadius={2}     boxShadow={4} backgroundColor="#b909e059" padding='1.5%'>
                    
                        Diverse Question Categories:
                        CodeQuiz Pro covers a wide range of coding languages and IT-related topics, including but not limited to Python, Java, C++, cybersecurity, cloud computing, databases, web development, and more. Whether you're a beginner or an expert, there are questions suitable for all levels.
                
                </Grid>
                <Grid item xs={1} borderRadius={2}  boxShadow={4} backgroundColor="#b909e059"  padding='1.5%'>
                    
                        Engaging Gameplay:
                        Enjoy a captivating gaming experience with a user-friendly interface. The quiz offers multiple-choice questions, coding challenges, and interactive puzzles to keep you entertained and motivated.
                    
                </Grid>
                <Grid item xs={1} borderRadius={2}  boxShadow={4} backgroundColor="#b909e059"  padding='1.5%'>
           
                        Compete with Friends:
                        Challenge your friends or connect with fellow coding and IT enthusiasts from around the world. Compete in real-time quizzes to test your skills and climb the global leaderboard.
                    
                </Grid>
                <Grid item xs={1} borderRadius={2}  boxShadow={4} backgroundColor="#b909e059"  padding='1.5%'>
                  
                        Learning and Improvement:
                        CodeQuiz Pro isn't just a game; it's a valuable learning tool. Each question is designed to enhance your knowledge and improve your coding and IT skills. Detailed explanations accompany answers to help you understand the concepts better.
                </Grid>
                <Grid item xs={1} borderRadius={2}  boxShadow={4} backgroundColor="#b909e059"  padding='1.5%'>
                    
                        Customizable Quizzes:
                        Tailor your gaming experience by selecting specific coding languages or IT domains to focus on. Create custom quizzes to hone your expertise in areas that matter most to you.
                    
                </Grid>
                <Grid item xs={1} borderRadius={2}  boxShadow={4} backgroundColor="#b909e059"  padding='1.5%'>
                   
                        Progress Tracking:
                        Monitor your progress and see how you've improved over time. Track your performance with insightful analytics and see where you excel or need further practice.
              
                </Grid>




            </Grid>

            </Box>




           <Button variant="contained" onClick={()=>{
             
               
                return  navigate('/profile-page');
           } }>
              Let's Play
           </Button>
            
        </>

    )
}
