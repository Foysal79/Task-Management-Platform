
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';

import User from '../LayOut/User/User';
import Main from '../LayOut/Main/Main';

import SignUp from '../LoginLogOut/SignUp';
import Login from '../LoginLogOut/Login';
import PrivetRouter from './PrivetRouter';
import Profile from '../LayOut/DashBoard/Profile/Profile';
import MainDashboard from '../LayOut/DashBoard/MainDashboard/MainDashboard';
import NewTask from '../LayOut/DashBoard/NewTask/NewTask';

import Task from '../LayOut/DashBoard/Task/Task';
import Notification from '../LayOut/DashBoard/Notification/Notification';
import UpdateTask from '../LayOut/DashBoard/UpdateTask/UpdateTask';
import About from '../LayOut/About/About';
import Blog from '../LayOut/Blog/Blog';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : "/",
            element : <Main></Main>
        },
        {
          path: "/user",
          element: <User></User>
        },
        {
          path : "/about",
          element : <About></About>
        },
        {
          path : "/blog",
          element : <Blog></Blog>
        }
        
      ]
    },
    {
      path : "/signUp",
      element : <SignUp></SignUp>
    },
    {
      path : "/login",
      element : <Login></Login>
    },
    {
      path: "/dashBoard",
      element : <PrivetRouter><MainDashboard></MainDashboard></PrivetRouter>,
      children : [
        {
          path : "/dashBoard/profile",
          element : <Profile></Profile>
        },
        {
          path: "/dashBoard/newTask",
          element : <NewTask></NewTask>
        },
        {
          path : "/dashBoard/task",
          element : <Task></Task>
        },
        {
          path : "/dashBoard/Notification",
          element : <Notification></Notification>
        },
        {
          path: '/dashBoard/update/:id',
          element : <UpdateTask></UpdateTask>,
          loader: ({params}) => fetch(`https://server-self-taskr.vercel.app/update/${params.id}`)
        }
        
        
      ]
    }
  ]);

export default Router;


// Self_Taskr
// UgkmXo0upvMv7tE7