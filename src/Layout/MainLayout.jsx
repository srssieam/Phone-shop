import { Outlet, useLocation } from "react-router-dom";
import Header from "../Component/Header/Header";
import { useEffect } from "react";

const MainLayout = () => {
    const loc = useLocation()
    useEffect(()=>{
        document.title = `Phone ${loc.pathname.replace("/","-")}`;
    },[loc.pathname])

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;