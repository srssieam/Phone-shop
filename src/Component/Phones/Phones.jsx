import PhoneCard from "./PhoneCard";


const Phones = ({phones}) => {
    console.log(phones)
    return (
        <div>
            <h1 className="text-2xl text-center py-10">Our Phones Collections</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-2">
                {   
                    // note: always use optional chaining to escape from 'map is not a function error'
                    phones?.map(phone =><PhoneCard key={phone.id} phone={phone}></PhoneCard>)  
                }
            </div>
        </div>
    );
};

export default Phones;