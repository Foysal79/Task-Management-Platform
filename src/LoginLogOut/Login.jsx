import  { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Login = () => {

    const {LogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handelLogin = e => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( email, password);

        LogIn(email, password)
        .then(result => {
          console.log(result.user)
          Swal.fire({
            title: "Your Login Done ",
            text: "You clicked the button!",
            icon: "success"
          });
          navigate(location?.state ? location.state : '/')
          
        })
        .catch(error => {
            Swal.fire({
                title: "Your Login Error ",
                text: "You clicked the button!",
                icon: "error"
              });
          console.log(error)
         
        } );
        
       
     }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
            <form onSubmit={handelLogin}  className="card-body">
                
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
      
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
      
      
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>don not account pls <Link to='/signUp' className="text-2xl font-bold" >Registration</Link> </p>
              
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;