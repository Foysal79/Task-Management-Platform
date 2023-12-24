import Completed from "../Completed/Completed";
import Ongoing from "../Ongoing/Ongoing";
import ToDoList from "../ToDoList/ToDoList";


const Task = () => {
    return (
        <div className=" pt-10 flex " >
            <div className="w-4/12" >
            <ToDoList></ToDoList>
            </div>

            <div className="w-4/12" >
            <Ongoing></Ongoing>
            </div>

            <div className="w-4/12" >
            <Completed></Completed>
            </div>

            

            
            
            
            
        </div>
    );
};

export default Task;