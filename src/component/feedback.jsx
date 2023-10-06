import { Box, Container, FormControl, InputLabel, Stack, TextField, Typography ,Rating,Button} from '@mui/material'
import Textarea from '@mui/joy/Textarea';
import React, { useState } from 'react'
export default function FeedbackComponent() {
    const [value,setValue]=useState(null);
    const [reviewOne,setReviewOne]=useState('');
    const [reviewTwo,setReviewTwo]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault()
    //   console.log({value});
    }
   

    return (
        <>
            <Container sx={{ height: '80vh', width: '50vw' }} >

                <Box component='form' sx={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'flex-start', alignItems: 'center' }} >

                    <FormControl
                        variant='standard'
                        sx={{
                            rowGap: '50px'
                        }}
                        onClick={handleSubmit}
                    >
                        <div>
                            <InputLabel htmlFor='question-1'></InputLabel>
                            <Typography variant='h6'>
                                Do you find the game is interesting?
                            </Typography>
                            <Textarea
                                value={reviewOne}
                                onChange={(e)=>setReviewOne(e.target.value)}
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
                              onChange={(e)=>setReviewTwo(e.target.value)}
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
                                setValue(newValue)
                                console.log({value})
                            }}
                            
                            
                            ></Rating>
                           
                        </div>

                        <div>
                            <Button variant='contained' size='medium' >Post</Button>
                        </div>

                    </FormControl>
                </Box>

            </Container>
        </>
    )
}
