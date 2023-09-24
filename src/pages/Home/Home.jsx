import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Phones from "../../Component/Phones/Phones";

const Home = () => {
    const phones = useLoaderData();
    // console.log(phones);
    return (
        <div>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;