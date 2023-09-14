import React from 'react';



export default function GamePlay(props) {
    const { val, correctVal,score, setScore } = props.details;
    const options = { ...val.answers };
    const option= Object.entries(options);
    


    
    const handleAnswers = (e) => {
        if(e.target.className===correctVal){
            setScore((score)=>score+1);
            
            
        }
        else{
            console.log('wrong')
         
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
                <ul>
                    {
                        option.map((item) => {
                            if (item[0] && item[1]) {
                                return (
                                    <li>
                                        <button className={item[0]} onClick={(e)=>handleAnswers(e)}>{item[1]}</button>
                                        
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
