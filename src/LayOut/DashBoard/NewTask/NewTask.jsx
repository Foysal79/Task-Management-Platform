
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from './../../../Provider/AuthProvider';


const NewTask = () => {

  const {user} = useContext(AuthContext);

    const { register, handleSubmit } = useForm();
  const onSubmit = data => {

    console.log(data);

    axios.post('http://localhost:5000/all', data )
		.then(res => {
      console.log(res.result);
			Swal.fire({
                title: "Your Task Add",
                text: "Welcome",
                icon: "success",
                
            })
		})






  }

  

  
    return (
        <div className='font-Inter' >
            <div className='py-10' >
                <h1 className='text-4xl font-semibold text-center' >Add Your Task</h1>
            </div>
             <form className='space-y-4 grid grid-cols-1 w-8/12 mx-auto '  onSubmit={handleSubmit(onSubmit)}>
      <input className='border-2 border-gray-600 py-2 px-4 rounded-lg ' type="text" placeholder="Titles" {...register("Titles")} />

      <input className='border-2 border-gray-600 py-2 px-4 rounded-lg' type="text" placeholder="Descriptions" {...register("Descriptions")} />
      
      <input  defaultValue={user.email} className=' border-2 border-gray-600 py-2 px-4 rounded-lg' type="email" {...register("email")} />

      <input defaultValue={user.email} className='border-2 border-gray-600 py-2 px-4 rounded-lg' type="email" placeholder=" Assinte task Email" {...register("TaskEmail")} />

      <input hidden defaultValue={"ToDo"} className='border-2 border-gray-600 py-2 px-4 rounded-lg' type="text" {...register("Task")} />

      <input className='border-2 border-gray-600 py-2 px-4 rounded-lg ' type="date" placeholder="Deadlines" {...register("Deadlines", {})} />
      <select className='border-2 border-gray-600 py-2 px-4 rounded-lg' {...register("Priority", { required: true })}>
        <option value="Low">Low</option>
        <option value="Moderate">Moderate</option>
        <option value="High">High</option>
      </select>

      <input className='border-2 border-gray-600 py-2 px-4 bg-[#6D67E4] text-white text-lg font-semibold btn hover:bg-[#190ee6] ' type="submit" />
    </form>
            
        </div>
    );
};

export default NewTask;