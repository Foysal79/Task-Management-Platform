import useToDo from "../../Hook/useTodo";
import CardNotification from "./CardNotification";


const Notification = () => {
    const [allToDo] = useToDo();
    return (
        <div className="space-y-16" >
            <div className="w-7/12" >
                 <h2  className="text-xl font-Inter font-bold text-center" > <span >assignments Task :</span>    {allToDo.length}</h2>
                 <div className="text-lg font-Inter space-y-2" >
                 {
                   allToDo.map(item => <CardNotification key={item._id} item={item} ></CardNotification> ) 
                  }
                 </div>
            </div>
            <div className="w-7/12" >
            <h2  className="text-xl font-Inter font-bold text-center" > <span >Updates Your Task :</span>    0 </h2>

            </div>
            
        </div>
    );
};

export default Notification;