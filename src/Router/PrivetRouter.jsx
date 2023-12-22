import  { useContext } from 'react';
import Lottie from "lottie-react";
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate} from 'react-router-dom';
 import loadingAnimations from "../../public/loading.json"
const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    if(loading)
    {
        return <Lottie className='w-6/12 mx-auto'  animationData={loadingAnimations} ></Lottie>
       
    }
    if(user)
    {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivetRouter;