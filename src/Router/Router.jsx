import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Favourite from "../pages/Favourite/Favourite";
import Login from "../pages/Login/Login";


const myCreatedRouter = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,  // Inside this component other component will remain fixed and displayed always except <outlet/>
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
            }
        ]
    }
])
export default myCreatedRouter;