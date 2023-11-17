import React from 'react';
import '../style/gameplay.css'
import { Box, Card, CardContent, Grid, Paper, Typography, Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { gameContext } from '../context/gameProvider';


export default function GamePlay(props) {
    // console.log(props);
    const { val, correctVal, score, setScore, handleQuestion, setNext, next, Qtn } = props.details;
    const options = { ...val.answers };
    const option = Object.entries(options);


    


    const handleAnswers = (e) => {
        if (e.target.id === correctVal) {
            setScore((score)=>score + 1);
            toast.success('Right', {
                position: "top-center",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setNext({ ...next, status: true });
            
            handleQuestion();
            


        }
        else {
            toast.error('wrong', {
                position: "top-center",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setNext({ ...next, status: true });
            handleQuestion();
        }


    }


    return (
        <>

            <Box sx={{
                width: '42rem',
                height: '20rem',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Card variant="outlined" sx={{
                    height: '50vh',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    outline: '2px'
                }}>

                    <CardContent sx={{
                        height: '50vh',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        /* align-content: center; */
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>


                        <Typography fontFamily=" Arial, Helvetica, sans-serif" variant='h5' >
                            {
                                Qtn()
                            }

                        </Typography>

                        <Typography fontFamily="Verdana, Arial, Helvetica, sans-serif">

                            {
                                val.question ? val.question : null
                            }

                        </Typography>



                        <Grid container sx={
                            {
                                columnGap: '10rem',
                                rowGap: '3rem',
                                height: '24vh',
                            }} >








                            {
                                option.map((item, idx) => {
                                    if (item[0] && item[1]) {

                                        return (
                                            <Grid Item xs={4} key={idx} sx={{ display: 'flex', justifyContent: "center", alignItem: "center" }}>
                                                <Paper elevation={3}>
                                                    <Button variant='outlined' sx={{ width: "100%", height: '100%' }} id={item[0]} onClick={(e) => handleAnswers(e)}>
                                                        {item[1]}
                                                        <ToastContainer></ToastContainer>
                                                    </Button>
                                                </Paper>

                                            </Grid>
                                        );
                                    }

                                })
                            }

                        </Grid>




                    </CardContent>



                </Card>



            </Box>
        </>

    )
}
