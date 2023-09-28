import axios from "axios";
import http from '../http';
import { QUIZ_API_KEY } from '../utils/apikey';
import { flushSync } from "react-dom";




const getQuizData = async () => {
    let res;
    let data;
    
    
    try {
        res = await axios.get('https://quizapi.io/api/v1/questions?apiKey='+QUIZ_API_KEY);
        data=await res.data;
    }
    catch (err) {
        console.log('error while feching data :',err.message);
    }

    return data;

}



const getQuizCategoryData = async (category) => {
    let res;
    let data;
    
    
    try {
        res = await axios.get('https://quizapi.io/api/v1/questions?apiKey='+QUIZ_API_KEY+'&category='+category);
        data=await res.data;
        // console.log(data)
    }
    catch (err) {
        console.log('error while feching data :',err.message);
    }

    return data;

}

const userLoggedIn=async (loggedIn,userDetail)=>{
    console.log(userDetail)
   return {loggedIn,userDetail}

}



export { getQuizData,getQuizCategoryData,userLoggedIn};