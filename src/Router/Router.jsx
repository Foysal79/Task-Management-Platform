
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
        
        
      ]
    }
  ]);

export default Router;