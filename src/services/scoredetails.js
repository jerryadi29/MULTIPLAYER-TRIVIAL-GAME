import axios from "axios";
import http from 'src/http.js';


export default getScoreCard=async()=>{
    try{
        let res=await http.get('/scorecard');
        console.log(res);
    }catch(error){
        console.error('error is :' , error);
        return [];
    }
    
}

getScoreCard();