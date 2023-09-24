import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";


const PhoneDetails = () => {
    const  { getId }  = useParams();  // we used useParams to extract the getId parameter from the URL, and then we can use it in our component.
    const phonesData = useLoaderData({});
    console.log(phonesData);

    const [phoneData, setPhoneData] = useState({});
    useEffect(() => {
        const findPhone = phonesData?.find((phone) => phone.id === getId); // finding phone data of getgetId
        setPhoneData(findPhone);
        console.log(findPhone)
    }, [getId, phonesData]) // here we set dependency as  getgetId and phonesData so that useEffect can run the function after getting values of getgetId and phonesData
    
    return (
        <div>
            <DetailsCard details={phoneData} ></DetailsCard>
        </div>
    );
};

export default PhoneDetails;