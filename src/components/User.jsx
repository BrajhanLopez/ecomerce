import React from 'react';
import { useNavigate } from "react-router-dom";
const User = () => {

const navigate = useNavigate()
    
const logout = () =>{
    localStorage.setItem("token", "")
    navigate('/login')
}


    return (
        <div className='user-log'>
            <div>
            <h1>Welcome User</h1>
            <button className='but' onClick={logout}>logout</button>
            </div>
        </div>
    );
};

export default User;