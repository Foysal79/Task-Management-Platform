
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../LayOut/Home/Home';
import User from '../LayOut/User/User';
import Main from '../LayOut/Main/Main';
import DashBoard from '../LayOut/DashBoard/DashBoard';
import SignUp from '../LoginLogOut/SignUp';
import Login from '../LoginLogOut/Login';

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
          path: "/dashBoard",
          element : <DashBoard></DashBoard>
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
    }
  ]);

export default Router;