import { Outlet } from "react-router-dom";
import DashBoard from "../DashBoard";


const MainDashboard = () => {
    return (
        <div className="flex w-11/12 mx-auto pt-10 gap-6" >
            <div className=" w-3/12" >
            <DashBoard></DashBoard>
            </div>
            <div className=" w-full flex-1" >
            <Outlet></Outlet>
            </div>
            
            
            
        </div>
    );
};

export default MainDashboard;