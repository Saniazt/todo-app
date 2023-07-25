import { createContext, useContext, useState } from "react";

//2:create a Context
export const AuthContext = createContext();

export const useAuth = ()=> useContext(AuthContext);

//2: Share the created context with other components

export default function AuthProvider({children}){
    
//3:Put some state in the context
   const [isAuthenticated, setAuthenticated] = useState(false)

    const valueToBeShare = {isAuthenticated,login,logout}

    function login(username,password){
        if(username==='saniazt' && password==='dummy'){
            setAuthenticated(true)
            return true
        } else 
            setAuthenticated(false)
            return false
        
    }

    function logout(){
        setAuthenticated(false)
    }


    return(
        <AuthContext.Provider value={ valueToBeShare }>
            {children}
        </AuthContext.Provider>
    )
}

