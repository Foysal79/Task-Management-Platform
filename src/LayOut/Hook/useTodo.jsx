import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const useToDo = () => {

    // tan stack query

    const axiosSecure = useAxiosPublic()
    const {user} = useContext(AuthContext);

    const {data: allToDo = [], refetch } = useQuery({
        queryKey: ["allToDo", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/toDo?email=${user?.email}`);
            return res.data;
        }
    })

    return [allToDo, refetch];
};

export default useToDo;