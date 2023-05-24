import { Goalcontext } from "../components/Context/GoalContext";
import { useContext } from "react";



export const useGoalcontext=()=>{
    const context=useContext(Goalcontext);
    if(!context){
        throw Error("theres a error in getting context")
    }
    return context;
}