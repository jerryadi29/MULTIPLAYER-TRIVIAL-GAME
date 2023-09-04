import axios from "axios";
import http from '../http'
import { QUIZ_API_KEY } from '../utils/apikey';


// const postQuizData = async (data) => {
   
//     try {
//         let res = await  http.post('/data',
//         JSON.stringify(data),
//         {
            
//             withCredentials: true
//         }
//     );
      
//     }
//     catch (err) {
//         console.log('error', err.name)
//     }
// }


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




export default getQuizData;