import { useEffect } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { setPets, setCategoryFilter, setSortOption, applyFiltersAndSort } from '../../redux/features/petsSlice';
import { useGetPetsQuery } from "../../redux/features/apiSlice";
import { Link } from "react-router-dom";
const Home = () => {

    const { data, isLoading } = useGetPetsQuery(undefined);
    console.log(data, "data 17");
    const dispatch = useDispatch();
    const pets = useSelector(state => state.pets.filteredPets);

    useEffect(() => {

                    dispatch(setPets(data));
               
        }
    , [data, dispatch]);

    const handleCategoryChange = (e) => {
        dispatch(setCategoryFilter(e.target.value));
        dispatch(applyFiltersAndSort());
    };

    const handleSortChange = (e) => {
        dispatch(setSortOption(e.target.value));
        dispatch(applyFiltersAndSort());
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container mx-auto">
             <div className="lg:w-[1200px] mx-auto">
             
      <select name="" id="" className="lg:w-24 text-xl" onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Cat">Cat</option>
         <option value="Dog">Dog</option>
       
      </select> <br />
<select name="" id="" className="lg:w-24 text-xl my-3" onChange={handleSortChange}>
        <option value="none">None</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-5">
                {pets && pets?.map(pet =>
                    <div className="w-72" key={pet._id}> 
                        <img className="w-72 h-52" src={pet.image} alt="" />
                        <h1 className="text-2xl font-semibold">{pet.name}</h1>
                        <p className="text-xl font-medium text-gray-500">${ pet.price}</p>
                       
                        <Link to={`/pet/${pet._id}`}>
                            <button className="text-xs cursor-pointer border border-gray-700 px-3 rounded-full">Detail</button>
                       </Link>
                    </div>
                    
                    )}
           </div>
        </div>
       </div>
    );
};

export default Home;