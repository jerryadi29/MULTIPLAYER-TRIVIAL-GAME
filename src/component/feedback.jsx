import { Box, Container, FormControl, InputLabel, Stack, TextField, Typography ,Rating,Button} from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import React, { useState,useContext } from 'react';
import { feedBackContext } from '../context/feedbackProvider';


export default function FeedbackComponent() {


    const context=useContext(feedBackContext);
    const [reviewOne,setReviewOne]=useState(context.initialState.reviewOne);
    const [reviewTwo,setReviewTwo]=useState(context.initialState.reviewTwo);
    const [value,setVal]=useState(context.initialState.value);
    const [feed,setFeed]=useState(context);


    const handleSetReviewOne=(val)=>{
        setReviewOne(val);
    }

    const handleSetReviewTwo=(val)=>{
        setReviewTwo(val);
    }

    const handleSetVal=(val)=>{
        setVal(val)
    }


    const handleFeed=(e)=>{
        
        console.log(reviewOne,reviewTwo,value)
       
    }
    
  
   
    
    
   

    return (
        <>
            <Container sx={{ height: '80vh', width: '50vw' }} >

                <Box component='form'
                 onClick={handleFeed}
                sx={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'flex-start', alignItems: 'center' }} >

                    <FormControl
                        variant='standard'
                        sx={{
                            rowGap: '50px'
                        }}
                       
                    >
                        <div>
                            <InputLabel htmlFor='question-1'></InputLabel>
                            <Typography variant='h6'>
                                Do you find the game is interesting?
                            </Typography>
                            <Textarea
                              value={reviewOne}
                              onChange={(e)=>{
                               handleSetReviewOne(e.target.value)
                             
                            }}
                                disabled={false}
                                minRows={4}
                                size="lg"
                                variant="outlined"
                                placeholder="Write a review about 50 words"
                            />
                        </div>

                        <div>

                            <InputLabel htmlFor='question-2'></InputLabel>
                            <Typography variant='h6'>
                                which game you like the most?
                            </Typography>
                            <Textarea
                              value={reviewTwo}
                              onChange={(e)=>{
                                handleSetReviewTwo(e.target.value)
                            }}
                                disabled={false}
                                minRows={4}
                                size="lg"
                                variant="outlined"
                                placeholder="Write a review about 50 words"
                            />
                        </div>

                        
                        <div>

                            <InputLabel htmlFor='question-2'></InputLabel>
                            <Typography variant='h6'>
                                How much do you rate our app?
                            </Typography>

                            <Rating
                             name='rating'
                             value={value}
                            size="large"
                            onChange={(e,newValue)=>{
                               handleSetVal(newValue)
                            }}
                            
                            
                            ></Rating>
                           
                        </div>

                        <div>
                            <Button 
                           
                            variant='contained' size='medium' >Post</Button>
                        </div>

                    </FormControl>
                </Box>

            </Container>
        </>
    )
}
