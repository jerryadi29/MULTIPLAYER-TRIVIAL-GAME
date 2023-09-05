import React, { useState } from 'react'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import {getQuizData} from '../services/clientCall';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";



export default function ProfileComponent() {

    const Navigate=useNavigate();
    let [categories, setCategories] = useState([]);
   

    useEffect(() => {
        let tempCat = [];
        let result = getQuizData().then((res) => {
            
            
            tempCat = res.map((item) => {
                
                return item.category;
            })

            setCategories(tempCat.filter((item, idx) => {
                return tempCat.indexOf(item) === idx;
            }))

        })


    }, [])


    const handleChange = (e) => {
        console.log(e.target);
        Navigate(e.target.value)
       
    }

   


    return (




        <div>

            <Box sx={{ minWidth: '120' }} >
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Game</InputLabel>

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                    >
                        {
                            categories.map((category,idx) => {
                                return <MenuItem key={idx}  value={category}>{category}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </Box>

    

        </div>




    )
}
