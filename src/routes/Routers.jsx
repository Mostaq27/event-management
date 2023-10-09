import { createBrowserRouter,} from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import Home from "../components/page/Home/Home";
import Login from "../components/page/Login/Login"; 
import Signup from "../components/page/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../components/page/NotFound/NotFound";
import NewEvent from "../components/page/NewEvent/NewEvent";
import About from "../components/page/About/About";
import WeddingPackage from "../components/page/WeddingPacksge/WeddingPackage";
import EventDetails from "../components/page/shared/EventDetails/EventDetails";
import Eventbycategory from "../components/Shopbycategory/Eventbycategory";

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allevent',
            element:<Eventbycategory></Eventbycategory>,
            loader: ()=>fetch('/eventsdetails.jon'),
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><EventDetails></EventDetails></PrivateRoute>
          
        },
        {
          path:'/weddingpackage',
          element:<PrivateRoute><WeddingPackage></WeddingPackage></PrivateRoute>
        },
        {
          path:'/newevent',
          element:<PrivateRoute><NewEvent></NewEvent></PrivateRoute>
        }
        
      ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ]);

  export default router;