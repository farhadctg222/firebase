import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from './AuthProvider';
import NavBar from './NavBar';
import Header from './Header';

const Sigup = () => {
 const {createUser}  = useContext(AuthContex)
 
    const handleSig = (e)=>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password')
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })

    }
    return (
        <div>
          <NavBar></NavBar>
          <Header></Header>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSig} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">FullName</span>
          </label>
          <input type="text" placeholder="FullName" name='name' className="input input-bordered" required />
        </div>
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
          <Link className='bg-success' to='/login'>Login</Link>
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

export default Sigup;