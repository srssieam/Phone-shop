import { useParams } from "react-router-dom";


const PhoneDetails = () => {
    const getId = useParams();  // we used useParams to extract the id parameter from the URL, and then we can use it in our component.
    console.log(getId)
    return (
        <div>
            <h1>Phone details</h1>
        </div>
    );
};

export default PhoneDetails;