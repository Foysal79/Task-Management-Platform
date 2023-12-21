
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../LayOut/Home/Home';
import User from '../LayOut/User/User';
import Main from '../LayOut/Main/Main';

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
        }
      ]
    },
  ]);

export default Router;