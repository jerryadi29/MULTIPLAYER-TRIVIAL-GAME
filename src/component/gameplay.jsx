import React from 'react'

export default function GamePlay(props) {
    const {val,setCorrectVal,setScore}=props.details;
    return (
        <>
            <div className='quiz-game-qtn'>
               {
                val.question ? val.question : null
               }
               
            </div>

            <div className='quiz-game-options'>
                {
                 
                }
            </div>


        </>

    )
}
