import { createContext, useReducer } from 'react';

export const Goalcontext=createContext();



export const goalReducer=(state,action)=>{
switch(action.type){
    case 'SET_GOAL':
        return{
           goals: action.payload
        }
    case 'CREATE_GOAL':
        return{
            goals:[action.payload,...state.goals]
        }
    default:
        return{state} 
}
}

export const GoalcontextProvider=({children})=>{
    const [state,dispatch]=useReducer(goalReducer,{goals:null})

    return(
        <Goalcontext.Provider value={{...state,dispatch}}>
        {children}
        </Goalcontext.Provider>
    )
    
}
 