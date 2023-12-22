import Completed from "../Completed/Completed";
import Ongoing from "../Ongoing/Ongoing";


const Task = () => {
    return (
        <div className="flex bg-red-500  " >


            <div className="flex-1" >
            <Ongoing></Ongoing>
            </div>

            <div className="flex-1" >
            <Completed></Completed>
            </div>

            
            
            
            
        </div>
    );
};

export default Task;