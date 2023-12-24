import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useToDo from "../../Hook/useTodo";
import { Link } from "react-router-dom";


const Card = ({item}) => {
    const {_id,Titles, Descriptions, Deadlines, Priority, Task, email} = item
   const [refetch] = useToDo();

    const axiosPublic = useAxiosPublic()
    const handelDebated = (id) => {
      console.log("delate id", id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

          axiosPublic.delete(`/users/${id}`)
          .then( res => {
            refetch;
            if(res.data.deletedCount > 0)
            {
              
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              

            }
          })

          
        }
      });

  }



    return (
        <div>
 <div className="card  bg-base-100 shadow-xl w-72">
  <div className="card-body">
    <h2 className="card-title font-Inter font-bold ">    {Titles}</h2>
    <p className="font-Inter" >{Descriptions}</p>
    <p> <span className="font-Inter font-bold" > Decline :</span> {Deadlines} </p>
    <p> <span className="font-Inter font-bold" >  Priority : </span> {Priority}  </p>
    
  </div>
  <div className="flex justify-around items-center mb-10" >
  <button onClick={() => handelDebated(_id) }  className="btn w-3/12 text-white bg-[#FF0000] hover:bg-[#FF0000] ">Delate</button>

  
  <Link to={`/dashBoard/update/${_id}`} >
    <button className="btn  btn-accent" >Update</button>
  </Link>
  </div>
</div> 
</div>
    );
};

export default Card;