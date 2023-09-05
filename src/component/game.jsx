import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {getQuizCategoryData} from '../services/clientCall';

export default function GameComponent() {

    const paramName=useParams();
    const [data, setData] = useState([]);

    useEffect(()=>{
       
        const datasetter=async()=>{
            console.log(paramName.gameId)
            try{
                let res=await getQuizCategoryData(paramName.gameId);
                setData(res);
                console.log(data);
            }catch(err){
                console.log('ereor while setting the data')
            }
        }

      ()=>  datasetter();

    },[])

   
    
    return (

        <>
    
            <div className='quiz-game'>

                <div className='quiz-game-qtn'>
                    {data.map((item)=>{
                            <li>{item.id}</li>
                    })}

                </div>

                   
            </div>
        </>

    )
}
