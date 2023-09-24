import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Phones from "../../Component/Phones/Phones";

const Home = () => {
    const phones = useLoaderData();
    // console.log(phones);
    return (
        <div>
            <Banner></Banner>
            <Phones></Phones>
        </div>
    );
};

export default Home;