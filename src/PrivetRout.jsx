import React, { useContext } from 'react';
import { AuthContex } from './AuthProvider';
import {
Navigate,useLocation
} from "react-router-dom";
const PrivetRout = ({children}) => {
    const {user,loading} = useContext(AuthContex)

    const location = useLocation()
    console.log(location)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
       return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
        
    
};

export default PrivetRout;