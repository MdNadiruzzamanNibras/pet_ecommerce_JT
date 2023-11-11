import { useSelector } from "react-redux";



const AddTofavourite = () => {
    const {pets} = useSelector(state => state.favourite)
    console.log(pets);
    return (
        <div className="container mx-auto">
            <div className="lg:[1100]">
                <div className="grid grid-cols-1 lg:grid-cols-3  gap-5">
                {pets && pets?.map(pet =>
                    <div className="w-72" key={pet._id}> 
                        <img className="w-72 h-52" src={pet.image} alt="" />
                        <h1 className="text-2xl font-semibold">{pet.name}</h1>
                        <p className="text-xl font-medium text-gray-500">${ pet.price}</p>
                       
                       
                    </div>
                    
                    )}
           </div>
             </div>
      </div>
    );
};

export default AddTofavourite;