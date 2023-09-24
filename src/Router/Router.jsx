import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Favourite from "../pages/Favourite/Favourite";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";


const myCreatedRouter = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,  // Inside this component other component will remain fixed and displayed always except <outlet/>
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',   // here we have to use same path to display the beginning page of the website
                element: <Home></Home>,   // This component will display at the beginning
                loader: ()=>fetch('/phones.json')  
            },
            {
                path:'/favourite',
                element: <Favourite></Favourite>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/phones/:id',  // dynamic path. here, id can be 1, 2 or 3......
                element:<PhoneDetails></PhoneDetails>,
                loader: ()=>fetch('/phones.json')
            }
        ]
    }
])
export default myCreatedRouter;