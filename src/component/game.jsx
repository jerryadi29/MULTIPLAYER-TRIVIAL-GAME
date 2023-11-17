import React, { useEffect, useRef, useState,useContext,useReducer } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getQuizCategoryData, userLoggedIn } from '../services/clientCall';
import GamePlay from './gameplay';
import { CircularProgress, Box, Typography, Stack, Button } from '@mui/material';
import { createTheme, alpha, getContrastRatio, ThemeProvider } from '@mui/material/styles';
import { postUserScore } from '../services/scoredetails';
import { gameContext } from '../context/gameProvider';

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);





export default function GameComponent() {



    const paramName = useParams();

    const [initialGameState,dispatch]=useContext(gameContext)
    
    const [data, setData] = useState(initialGameState.data);
    const [val, setVal] = useState(initialGameState.val);
    const [correctVal, setCorrectVal] = useState(initialGameState.correctVal);
    const [score, setScore] = useState(initialGameState.score);
    const [timer, setTimer] = useState(initialGameState.timer);
    const [next, setNext] = useState(initialGameState.next);





    const ref = useRef();
    const navigate = useNavigate();


    useEffect(() => {
        let apiCall = false;
        const datasetter = async () => {

            try {
                let res = await getQuizCategoryData(paramName.gameId);
                setData(res);
                
                dispatch({type:'RESPONSE',data:res});
                apiCall = true;
                setVal(res[next.idx]);
                dispatch({type:'VALUE',val:res[next.idx]});
              
                

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
            const {loggedIn,userDetail}=userLoggedIn();
            console.log(userDetail)
            // postUserScore(score,userDetail.length);
          
        }


        return () => {
            clearInterval(ref.current);
        }


    }, [timer]);

    const handleQuestion = (dismiss) => {

        setTimer(45);
        dispatch({type:'TIMER',timer:45})
        next.idx += 1;
        setNext({ ...next, idx: next.idx });
        dispatch({type:'NEXT',next:{ ...next, idx: next.idx }})
        let currentVal = data[next.idx]
        setVal(currentVal);
        dispatch({type:'VALUE',val:currentVal});

        setCorrectVal(currentVal.correct_answer);
        dispatch({type:'CORRECT_VAL',correctVal:correctVal})

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








                <GamePlay details={{ val, correctVal, score, setScore, handleQuestion, setNext, next, Qtn}}></GamePlay>


                <Stack direction='row' rowGap={3} columnGap={3}>

                    <Button
                    color="violet"
                    variant='outlined' 
                    onClick={() => {

                        // setNext({ ...next, status: true });
                        dispatch({type:'NEXT',status:true})
                        handleQuestion();


                    }}>Next</Button>


                    <Button
                     variant='outlined'
                     color="violet"
                    onClick={() => {
                        next.end = true
                        setNext({ ...next, end: next.end });
                        dispatch({type:'NEXT',end: next.end })
                        postUserScore(score);
                    }}>
                        submit
                    </Button>

                </Stack>



            </Box>
            </ThemeProvider>
        </>

    )
}
