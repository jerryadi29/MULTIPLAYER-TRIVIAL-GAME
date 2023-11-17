import { createContext,useReducer } from "react";
import { useState } from "react";


const initialState={
  data: [],
  val: '',
  correctVal: null,
  score: 0,
  timer: 45,
  next: { status: false, idx: 1, end: false }
  }

const gameReducer=(state,action)=>{
 console.log(action)
  switch (action.type){
    case 'RESPONSE':
      return ()=>{
         
        if(state.data===action.data){
          
          return {...state,data:action.data}
        }else{
          return state
        }
        
      }
      
    case 'VALUE':
      return (state)=>{
        if(state.val===action.val){
          return {...state,val:action.val}
        }else{
          return state
        }
        
      }

    case 'CORRECT_VAL':
      return (state)=>{
        if(state.correctVal===action.correctVal){
          return {...state,correctVal:action.correctVal}
        }else{
          return state
        }
        
      }

    case 'SCORE':
     
      return (state)=>{
        if(state.score===action.score){
          return {...state,score:action.score}
        }else{
          return state
        }
        
      }

    case 'TIMER':

      return (state)=>{
    
        if(state.timer===action.timer){
          return {...state,timer:action.timer}
        }else{
          return state
        }
        
      };
    
    case 'NEXT':
      
      return (state)=>{
        
        if(state.next.status===action.status){
          return {...state,next:{...state.next,status:action.status}}
        }
        else if(state.next.idx===action.idx){
          return {...state,next:{...state.next,idx:action.idx}}
        }
        else{
          return {...state,next:{...state.next,end:action.end}}
        }
        
      };

    default:
      return state;

  }

}





export const gameContext = createContext();

export function GameContextProvider({children}) {

  const [initialGameState,dispatch]=useReducer(gameReducer,initialState)
  return (
    <>
      <gameContext.Provider value={[initialGameState,dispatch]} >
       {children}
      </gameContext.Provider>
    </>
  )
}
