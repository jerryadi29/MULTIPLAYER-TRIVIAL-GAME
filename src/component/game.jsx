import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getQuizCategoryData } from '../services/clientCall';
import GamePlay from './gameplay';
import { CircularProgress, Box, Typography, Stack, Button } from '@mui/material';
import { createTheme, alpha, getContrastRatio, ThemeProvider } from '@mui/material/styles';


const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);





export default function GameComponent() {



    const paramName = useParams();
    const [data, setData] = useState([]);
    const [val, setVal] = useState('');
    const [correctVal, setCorrectVal] = useState();
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(45);
    const [next, setNext] = useState({ status: false, idx: 1, end: false });






    const ref = useRef();
    const navigate = useNavigate();


    useEffect(() => {
        let apiCall = false;
        const datasetter = async () => {

            try {
                let res = await getQuizCategoryData(paramName.gameId);
                console.log(res);
                setData(res);
                apiCall = true;
                setVal(res[next.idx]);

            } catch (err) {
                console.log('ereor while setting the data')
            }
        }

        datasetter();




        return () => {
            if (apiCall) {
                datasetter();
            }
        }


    }, []);




    useEffect(() => {

        ref.current = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 0 || next.status === true) {
                    clearInterval(ref.current);
                    handleQuestion();
                    return prevTimer;
                }

                return prevTimer - 1;
            });

        }, 1000);



        if (next.idx >= 19 || next.end) {
            navigate('/leaderboard');
        }


        return () => {
            clearInterval(ref.current);
        }


    }, [timer]);

    const handleQuestion = (dismiss) => {

        setTimer(45);
        next.idx += 1;
        setNext({ ...next, idx: next.idx });
        let currentVal = data[next.idx]
        setVal(currentVal);
        setCorrectVal(currentVal.correct_answer);
       

    }


    const redAlert = () => {
        return timer > 10 ? "secondary" : "error"
    }
    const Qtn = () => {
        return (
            <span>
                Qtn {next.idx}/{data.length}
            </span>
        );
    }

    const BtnTheme = createTheme({
        palette: {
          violet: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
          },
        },
    })


    return (
        <>

            <ThemeProvider theme={BtnTheme}>
            <Box sx={{
                gap:'2vh',
                height: '80vh',
                width: '80vw',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
            }}>


                <Stack direction='row' sx={{
                    alignContent: 'center', justifyContent: 'space-between', alignItems: 'flex-start', height: '5rem', width: '20rem'
                }}>

                    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                        <CircularProgress variant="determinate" value={timer} color={redAlert()} size="3rem" />
                        <Box
                            sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="caption" component="div" color="text.secondary" size="2em">
                                {timer}
                            </Typography>
                        </Box>
                    </Box>







                    <span>
                        Score : {score}
                    </span>



                </Stack>








                <GamePlay details={{ val, correctVal, score, setNext, next, setScore, handleQuestion, Qtn }}></GamePlay>


                <Stack direction='row' rowGap={3} columnGap={3}>

                    <Button
                    color="violet"
                    variant='outlined' 
                    onClick={() => {

                        setNext({ ...next, status: true });
                        handleQuestion();


                    }}>Next</Button>


                    <Button
                     variant='outlined'
                     color="violet"
                    onClick={() => {
                        next.end = true
                        setNext({ ...next, end: next.end })
                    }}>
                        submit
                    </Button>

                </Stack>



            </Box>
            </ThemeProvider>
        </>

    )
}
