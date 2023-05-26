import { AuthContext } from "../components/Context/AuthContext";
import { useContext } from "react";



export const useAuthContext=()=>{
    const context=useContext(AuthContext);
    if(!context){
        throw Error("theres a error in getting context")
    }
    return context;
}