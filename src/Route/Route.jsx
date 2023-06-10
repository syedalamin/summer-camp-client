import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../pages/Dashboard/MyCart/MyCart';
import Classes from '../pages/Classes/Classes';
import PrivateRoute from './PrivateRoute';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers/ManageUsers';
import ManageClasses from '../pages/Dashboard/Admin/ManageClasses/ManageClasses';
import AdminRoute from './AdminRoute';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'manageusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'manageclasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      }
    ]
  }
]);