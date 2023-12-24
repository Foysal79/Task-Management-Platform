import useToDo from "../../Hook/useTodo";
import Card from "../Card/Card";


const ToDoList = () => {
    const [allToDo] = useToDo();
    // const dessert = menu.filter(item => item.category === 'dessert');
    const ToDo = allToDo.filter(item => item.Task === 'ToDo' )
    return (
        <div className="border-r-2 " >
            <h2 className="text-2xl font-extrabold text-center border-b-2 w-8/12 mx-auto " >To Do List {ToDo.length} </h2>

            <div className="w-11/12 mx-auto grid grid-cols-1 space-y-2 mt-6 mb-10" >

                {
                   ToDo.map(item => <Card key={item._id} item={item} ></Card> ) 
                }

            </div>
        </div>
    );
};

export default ToDoList;