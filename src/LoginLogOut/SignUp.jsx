import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import Swal from "sweetalert2";


const auth = getAuth(app);


const SignUp = () => {

    const {createUser, GoogleAccount} = useContext(AuthContext);


     const handelRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, img, email, password);
        
        
        createUser(email, password)
        .then(result => {
            Swal.fire({
                title: "Your Registration Done ",
                text: "You clicked the button!",
                icon: "success"
              });
            console.log(result.user);
            
            
        })
        .catch(error => {
            console.log(error.message);
            Swal.fire({
                title: "Your Registration Error ",
                text: "You clicked the button!",
                icon: "error"
              });
  
            
          })



     }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handelRegistration}  className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input type="text" name="img" placeholder="Image Url" className="input input-bordered" />
        </div>


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
          <button type="submit" className="btn btn-primary">Registration</button>
        </div>
        <p>You Already Account pls <Link to='/login' className="text-2xl font-bold" >Login</Link> </p>
        <div className="flex justify-center mt-4 ">
        <FaGoogle onClick={() => GoogleAccount()} className="text-5xl text-green-600 " ></FaGoogle>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;