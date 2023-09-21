import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getQuizCategoryData } from '../services/clientCall';
import GamePlay from './gameplay';

export default function GameComponent() {

    const paramName = useParams();
    const [searchParam, setSearchParam] = useSearchParams();
    const [data, setData] = useState([]);
    const [val, setVal] = useState('');
    const [correctVal, setCorrectVal] = useState();
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(100);
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

    const handleQuestion = () => {

            setTimer(100); 
            next.idx += 1;
            setNext({ ...next, idx: next.idx });
            let currentVal = data[next.idx]
            setVal(currentVal);
            setCorrectVal(currentVal.correct_answer);

    }



    return (
        <>
           

           

            <div className='quiz-game'>



                <span >Timer : {timer}</span>
                <br />

                <span>Score : {score}</span>
                <br />

                <span>Qtn {next.idx}/{data.length}</span>
                <br />




                <GamePlay details={{ val, correctVal, score, setNext, next, setScore, handleQuestion }}></GamePlay>


                <button onClick={() => {

                    setNext({ ...next, status: true });
                    handleQuestion();


                }}>Next</button>


                <button onClick={() => {
                    next.end = true
                    setNext({ ...next, end: next.end })
                }}>
                    submit
                </button>
            </div>
        </>

    )
}
