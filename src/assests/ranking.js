import data from "./db.json";


const ScoreCardData=data.users


let intialDataWithRanking=[];
function  mapDataWithRank(row,i){
    return {...row,rank:i+1};
}

function  getInitialData(){
  return ScoreCardData;
}

function getRankedData(){
  const tempData=getInitialData();
  
  tempData.sort((a,b)=>b.score-a.score);
  const rankedData=tempData.map(mapDataWithRank);
  console.log(rankedData)
  return rankedData;
}

// console.log()
export {getInitialData,getRankedData};