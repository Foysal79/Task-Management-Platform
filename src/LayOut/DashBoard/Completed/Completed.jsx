import useToDo from "../../Hook/useTodo";
import Card from "../Card/Card";


const Completed = () => {
    const [allToDo] = useToDo();
    // const dessert = menu.filter(item => item.category === 'dessert');
    const Completed = allToDo.filter(item => item.Task === 'Completed' )
    return (
        <div className="border-l-2" >
            <h2 className="text-2xl font-extrabold text-center border-b-2 w-8/12 mx-auto " >Completed - {Completed.length}</h2>
            <div className="w-11/12 mx-auto grid grid-cols-1 space-y-2 mt-6 mb-10" >

                {
                   Completed.map(item => <Card key={item._id} item={item} ></Card> ) 
                }

            </div>

        </div>
    );
};

export default Completed;