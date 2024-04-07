import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
          <Link to='/'> <button className='btn btn-success'>Home</button></Link> 
         <NavLink to='/login'> <button  className='btn btn-success'>Login</button></NavLink>
          <NavLink to='/sigup'> <button className='btn btn-success'> SigIn</button></NavLink> 
          <NavLink> <button className='btn btn-success'>SigUp</button></NavLink> 
        </div>
    );
};

export default Header;