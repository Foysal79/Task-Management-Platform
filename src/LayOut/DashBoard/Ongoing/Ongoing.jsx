import useToDo from "../../Hook/useTodo";
import Card from "../Card/Card";


const Ongoing = () => {
    const [allToDo] = useToDo();
    // const dessert = menu.filter(item => item.category === 'dessert');
    const onGoing = allToDo.filter(item => item.Task === 'OnGoing' )
    return (
        <div className='border-x-2 mx-auto' >
            <h1 className="text-2xl font-extrabold text-center border-b-2 w-8/12 mx-auto "  >OnGong - {onGoing.length} </h1>

            <div className="w-11/12 mx-auto grid grid-cols-1 space-y-2 mt-6 mb-10" >

                {
                   onGoing.map(item => <Card key={item._id} item={item} ></Card> ) 
                }

            </div>
        </div>
    );
};

export default Ongoing;