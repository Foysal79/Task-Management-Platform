import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="grid grid-rows-1 bg-[#6D67E4] py-10 px-3 font-Inter space-y-4 rounded-2xl " >
            <Helmet>
                <title>ST || DashBoard </title>
            </Helmet>
            <NavLink to="/dashBoard/profile" className="text-xl btn bg-black hover:bg-black font-semibold text-white"  >Profile</NavLink>
            <NavLink to="/dashBoard/newTask" className="text-xl btn bg-black hover:bg-black font-semibold text-white" >Add Your Task</NavLink>
            <NavLink to="/dashBoard/task" className="text-xl btn bg-black hover:bg-black font-semibold text-white" >Task</NavLink>
            
            <NavLink to="/" className="text-xl btn bg-black hover:bg-black font-semibold text-white" >Home</NavLink>
        </div>
    );
};

export default DashBoard;