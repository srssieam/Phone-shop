import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const PhoneDetails = () => {
    const {getId} = useParams();  // we used useParams to extract the id parameter from the URL, and then we can use it in our component.
    console.log(getId);
    const phonesData = useLoaderData();
    console.log(phonesData);  

    const [phoneData, setPhoneData]= useState();
    useEffect(()=>{
        const findPhone = phonesData?.find( phone => phone.id === getId ); // finding phone data of getId
        setPhoneData(findPhone)
    },[getId, phonesData]) // here we set dependency as  getId and phonesData so that useEffect will run the function after getting values of getId and phonesData

    return (
        <div>
            <h1>Phone details</h1>
        </div>
    );
};

export default PhoneDetails;