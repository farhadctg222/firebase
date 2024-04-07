import React, { useContext } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import { AuthContex } from './AuthProvider';
import {useLocation,useNavigate} from "react-router-dom";
const Login = () => {
    const {SigIn} = useContext(AuthContex)
    const location = useLocation()
    const navigate = useNavigate()
    const handle = (e)=>{
        e.preventDefault();
        
        const form = new FormData(e.currentTarget);
       const email = form.get('email')
       const password = form.get('password')
       console.log(email,password)
        SigIn(email,password)
        .then(result=>{
           navigate(location?.state? location.state: '/');
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className='text text-2xl'>Please Login</h1>
      <form onSubmit={handle} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;