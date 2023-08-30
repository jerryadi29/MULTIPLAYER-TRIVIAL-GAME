import data from "./db.json";


const ScoreCardData=data.scorecard


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
  const rankedData=tempData.map(mapDataWithRank)
  return rankedData;
}

// console.log()
export {getInitialData,getRankedData};