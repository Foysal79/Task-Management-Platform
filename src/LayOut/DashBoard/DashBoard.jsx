import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const DashBoard = () => {
    const navigate = useNavigate();

    const {user, LogOut} = useContext(AuthContext);

    const logOutFun = () => {
        LogOut();
        navigate('/')
        Swal.fire({
            title: "Sussfully Logout",
            text: "You clicked the button!",
            icon: "success"
          });
        
    }

    return (
        <div className="grid grid-rows-1 bg-[#6D67E4] py-10 px-3 font-Inter space-y-4 rounded-2xl " >
            <Helmet>
                <title>ST || DashBoard </title>
            </Helmet>
            <div className="w-11/12 mx-auto space-y-2" >
                
                <img className="rounded-full w-5/12 mx-auto" src={user?.photoURL} alt="" />
                <h2> <span className="text-xl font-bold" >  Name : </span> <span className="text-lg font-medium">
                {user?.displayName}
                    </span> </h2>
                <h4> <span className="text-xl font-bold" > Email : </span>
                <span className="text-lg font-medium" >{user?.email}</span>  </h4>

            </div>
            
            <NavLink to="/dashBoard/newTask" className="text-xl btn bg-black hover:bg-black font-semibold text-white" >Add Your Task</NavLink>
            <NavLink to="/dashBoard/task" className="text-xl btn bg-black hover:bg-black font-semibold text-white" >Task</NavLink>

            <NavLink to="/dashBoard/Notification" className="text-xl btn bg-black hover:bg-black font-semibold text-white" >Notification</NavLink>
            
            <NavLink to="/" className="text-xl btn bg-black hover:bg-black font-semibold text-white" >Home</NavLink>
            
            <button onClick={logOutFun} className="text-xl btn bg-black hover:bg-black font-semibold text-white" >LogOut</button>
        </div>
    );
};

export default DashBoard;