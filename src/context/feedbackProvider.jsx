import { createContext } from "react";


const feedBack = {
  initialState: {
    value: '',
    reviewOne: '',
    reviewTwo: '',
  },
  setVal:(val)=>{},
  setReviewOne:(reviewOne)=>{},
  setReviewTwo:(reviewTwo)=>{}

}




export const feedBackContext = createContext(feedBack);


export function FeedBackContextProvider({children}) {


  return (
    <>
      <feedBackContext.Provider value={feedBack}>
        {children}
      </feedBackContext.Provider>
    </>
  )
}