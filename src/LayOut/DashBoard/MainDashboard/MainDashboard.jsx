import { Outlet } from "react-router-dom";
import DashBoard from "../DashBoard";


const MainDashboard = () => {
    return (
        <div className="flex w-10/12 mx-auto pt-10 gap-6" >
            <div className="" >
            <DashBoard></DashBoard>
            </div>
            <div className="border-4 h-screen w-full flex-1" >
            <Outlet></Outlet>
            </div>
            
            
            
        </div>
    );
};

export default MainDashboard;