import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateTask = () => {
    const item = useLoaderData();
    const {_id,Titles, Descriptions, Deadlines, Priority, Task, email} = item
    
  const {user} = useContext(AuthContext);

const { register, handleSubmit } = useForm();
const onSubmit = data => {

  console.log(data);


  fetch(`https://server-self-taskr.vercel.app/update/${_id}`, {
            method: "PUT",
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0)
            {
                Swal.fire({
                    title: " update your Task ",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
        })





}




  return (
      <div className='font-Inter' >
          <div className='py-10' >
              <h1 className='text-4xl font-semibold text-center' >Update Your Task</h1>
          </div>
           <form className='space-y-4 grid grid-cols-1 w-8/12 mx-auto '  onSubmit={handleSubmit(onSubmit)}>
    <input defaultValue={Titles} className='border-2 border-gray-600 py-2 px-4 rounded-lg ' type="text" placeholder="Titles" {...register("Titles")} />

    <input defaultValue={Descriptions} className='border-2 border-gray-600 py-2 px-4 rounded-lg' type="text" placeholder="Descriptions" {...register("Descriptions")} />
    
    <input defaultValue={user.email} className=' border-2 border-gray-600 py-2 px-4 rounded-lg' type="email" {...register("email")} />

    <input defaultValue={user.email} className='border-2 border-gray-600 py-2 px-4 rounded-lg' type="email" placeholder=" Assinte task Email" {...register("TaskEmail")} />

    {/* <input  className='border-2 border-gray-600 py-2 px-4 rounded-lg' type="text" {...register("Task")} /> */}

    <input defaultValue={Deadlines} className='border-2 border-gray-600 py-2 px-4 rounded-lg ' type="date" placeholder="Deadlines" {...register("Deadlines", {})} />
    <select defaultValue={Priority} className='border-2 border-gray-600 py-2 px-4 rounded-lg' {...register("Priority", { required: true })}>
      <option value="Low">Low</option>
      <option value="Moderate">Moderate</option>
      <option value="High">High</option>
    </select>

    <select  className='border-2 border-gray-600 py-2 px-4 rounded-lg' {...register("Task")}>
      <option value="ToDo">ToDo</option>
      <option value="OnGoing">OnGoing</option>
      <option value="Completed">Completed</option>
    </select>

    <input className='border-2 border-gray-600 py-2 px-4 bg-[#6D67E4] text-white text-lg font-semibold btn hover:bg-[#190ee6] ' type="submit" />
  </form>
          
      </div>
  );
};

export default UpdateTask;