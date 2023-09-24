import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";


const PhoneDetails = () => {
    const  { id }  = useParams();  // we used useParams to extract the id parameter from the URL, and then we can use it in our component.
    const phonesData = useLoaderData({});
    console.log(phonesData);

    const [phoneData, setPhoneData] = useState({});
    useEffect(() => {
        const findPhone = phonesData?.find((phone) => phone.id === id); // finding phone data of id
        setPhoneData(findPhone);
    }, [id, phonesData]) // here we set dependency as  id and phonesData so that useEffect can run the function after getting values of id and phonesData
        console.log(phoneData)
    return (
        <div>
            <DetailsCard details={phoneData}></DetailsCard>
        </div>
    );
};

export default PhoneDetails;