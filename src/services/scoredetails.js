import http from '../http'


 const getScoreCard=async()=>{
    try{
        let res=await http.get('/users');
     
    }catch(error){
        console.error('error is :' , error);
        return [];
    }
    
}


 const  postUserScore = async (data,userID) => {
   
    let scoreData={"score":data};

    try {
        let res = await  http.patch('/users/'+userID,
        JSON.stringify(scoreData),
        
        {
            
            withCredentials: true
        }
    );
    
    }
    catch (err) {
        console.log('error', err.name)
    }
  
}

getScoreCard();
export {postUserScore,getScoreCard}