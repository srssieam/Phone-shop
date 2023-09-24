import { Outlet, useLocation } from "react-router-dom";
import Header from "../Component/Header/Header";
import { useEffect } from "react";

const MainLayout = () => {
    const loc = useLocation()
    useEffect(()=>{
        if(loc.pathname === '/'){
            document.title = 'Home'
        }else{
            document.title = `Phone ${loc.pathname.replace("/","-")}`;
        }

        if(loc.state){
            document.title = loc.state
        }
    },[loc.pathname])

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;