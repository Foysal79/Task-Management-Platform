import React from 'react';
import { useForm } from 'react-hook-form';


const NewTask = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  
    return (
        <div className='font-Inter' >
            <div className='py-10' >
                <h1 className='text-4xl font-semibold text-center' >Add Your Task</h1>
            </div>
             <form className='space-y-4 grid grid-cols-1 w-8/12 mx-auto '  onSubmit={handleSubmit(onSubmit)}>
      <input className='border-2 border-gray-600 py-2 px-4 rounded-lg ' type="text" placeholder="Titles" {...register("Titles", { max: 99, min: 0})} />

      <input className='border-2 border-gray-600 py-2 px-4 rounded-lg' type="text" placeholder="Descriptions" {...register("Descriptions", { max:250, min: 0})} />
      
      <input className='border-2 border-gray-600 py-2 px-4 rounded-lg' type="email" placeholder="Email." {...register("Email.", {required: true})} />
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