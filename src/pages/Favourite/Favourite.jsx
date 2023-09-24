import { useEffect, useState } from "react";
import FavouriteCart from "./FavouriteCart";


const Favourite = () => {
    const [favorite, setFevourite]= useState([]);
    const [noFound, setNoFound]= useState();

    useEffect(()=>{
        const favouriteItem =JSON.parse(localStorage.getItem('favourite'));
        
        if(favouriteItem){
            setFevourite(favouriteItem)
        }else{
            setNoFound('No data found')
        }

    },[])
    return (
        <div>
            
            {/* {noFound ? (<p className="h-[80vh] flex justify-center items-center">{noFound}</p>) : (<div></div>)} */}
            {noFound ? (<p className="h-[80vh] flex justify-center items-center">{noFound}</p>) : 
            (<div className="grid grid-cols-2 gap-5">
                {favorite.map( phone => <FavouriteCart key={phone.id} favouritePhone={phone}></FavouriteCart>)}
            </div>)}
        </div>
    );
};

export default Favourite;