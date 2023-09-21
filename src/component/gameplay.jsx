import React from 'react';
import '../style/gameplay.css'


export default function GamePlay(props) {
    const { val, correctVal,score, setScore,handleQuestion,setNext,next } = props.details;
    const options = { ...val.answers };
    const option= Object.entries(options);
    


    
    const handleAnswers = (e) => {
        if(e.target.className===correctVal){
            setScore((score)=>score+1);
            setNext({...next,status:true});
            handleQuestion();
            
        }
        else{
            console.log('wrong');
            setNext({...next,status:true});
            handleQuestion();
        }

    }

    return (
        <>
            <div className='quiz-game-qtn'>
                {
                    val.question ? val.question : null
                }

            </div>

            <div className='quiz-game-options'>
                <ul  className='quiz-game-option'>
                    {
                        option.map((item) => {
                            if (item[0] && item[1]) {
                                return (
                                    <li  className='quiz-game-each-options' >
                                        <button id='option-btn' className={item[0]} onClick={(e)=>handleAnswers(e)}>{item[1]}</button>
                                        
                                    </li>
                                );
                            }
                            
                        })
                    }

                </ul>
            </div>


        </>

    )
}
