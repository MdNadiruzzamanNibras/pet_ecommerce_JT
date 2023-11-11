import { useParams } from "react-router-dom";
import { useGetSingePetQuery } from "../../redux/features/apiSlice";
import { useDispatch } from "react-redux";
import { addTofavourite } from "../../redux/features/favouiteSlice";


const Detail = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingePetQuery(id)
    const dispatch = useDispatch()
    if (isLoading) {
        <p>Loading</p>
    }
    if (!data) {
        isLoading
    }
    const handleAdd = () => {
        dispatch(addTofavourite(data))
    }
    
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen">
                
                        <a href="#" className="block">
  <img
    alt="Signage"
    src={data?.image}
    className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
  />

  <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
    <strong className="font-medium">{data?.name}</strong>

    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                                <p className="mt-0.5 opacity-50 sm:mt-0">${data?.price}</p> <button onClick={()=>handleAdd()}>add to favourite</button> <br />
                                <p>{data?.description}</p>
  </div>
</a>
                   
                
            </div>
        </div>
    );
};

export default Detail;