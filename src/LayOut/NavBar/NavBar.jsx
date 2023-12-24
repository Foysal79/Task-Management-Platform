import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const NavBar = () => {
  const {user, LogOut} = useContext(AuthContext);
    const NavLink2 = <>
    <NavLink to="/" > <li><a className=" font-semibold font-Inter" >Home</a></li> </NavLink>
    <NavLink to="/about" > <li><a className=" font-semibold font-Inter" >About</a></li> </NavLink>
    <NavLink to="/blog" > <li><a className=" font-semibold font-Inter" >Blog</a></li> </NavLink>
    <NavLink to="/dashboard" > <li><a className=" font-semibold font-Inter" >Dashboard</a></li> </NavLink>
        
        
    
    </>
    return (
        <div>
            <div className="navbar text-white md:px-12 lg:px-16 py-4 font-Inter bg-[#453C67] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            NavLink2
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Self Taskr </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        NavLink2
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? <div className="flex gap-4 items-center">
        <p>{user?.displayName}</p> 
        <button onClick={() => LogOut()} className="btn bg-[#ec2727] hover:bg-[#F2F7A1] text-black" >LogOut</button>
      </div> : <Link to='/login' ><a className="btn bg-[#F2F7A1] hover:bg-[#F2F7A1] text-black">Login</a></Link>
    }
  </div>
</div>
        </div>
    );
};

export default NavBar;