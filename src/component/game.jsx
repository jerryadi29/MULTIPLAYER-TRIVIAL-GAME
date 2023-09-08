import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { getQuizCategoryData } from '../services/clientCall';
import GamePlay from './gameplay';

export default function GameComponent() {

    const paramName = useParams();
    const [searchParam, setSearchParam] = useSearchParams();
    const [data, setData] = useState([]);
    const [val, setVal] = useState('');
    const [correctVal, setCorrectVal] = useState();
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(3);
    const [next, setNext] = useState({ cnt: 0, status: false, idx: 0 });




    useEffect(() => {
        let apiCall=false
        const datasetter = async () => {
            console.log(paramName.gameId)
            try {
                let res = await getQuizCategoryData(paramName.gameId);
                setData(res);
                apiCall=true;
                setVal(res[next.idx]);

            } catch (err) {
                console.log('ereor while setting the data')
            }
        }

        datasetter();
        

      return ()=>{
        if(apiCall){
            datasetter();
        }
      }  


    }, []);
    let changeQtn;

    useEffect(() => {

         changeQtn = setInterval(() => {
            setTimer(timer - 1);
        }, 1000)

        handleQuestion();

       


     

        return()=>{
            clearInterval(changeQtn);
        }   
        



    }, [timer])

    const handleQuestion=()=>{
        
        if ( next.status==true|| timer == 0) {
            console.log(timer)
            setTimer(3);

           
                clearInterval(changeQtn);
            
            
            
            next.idx += 1;
            setNext({ ...next,idx: next.idx });
            setVal(data[next.idx]);
        }

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

                
                <GamePlay details={{ val, setCorrectVal, setScore }}></GamePlay>


                <button onClick={() => {

                    next.status=true;
                    setVal({...next,status:next.status});
                    handleQuestion();
               
                    
                }}>Next</button>
            </div>
        </>

    )
}
