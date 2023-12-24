
import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://server-self-taskr.vercel.app" 
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;