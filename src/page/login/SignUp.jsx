import { useForm } from "react-hook-form"
import { useCreateUserWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import auth from "../../firebase.config";
const SignUp = () => {
  const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
   
    try {
       createUserWithEmailAndPassword(data.email, data.password)
    console.log("user create");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(user, "user");
   if(loading){
      return <p>Loading...</p>
    }
     let errorMassage
        if(error){
             errorMassage = <div className='text-red-500'>Error: {error?.message}</div>
        }
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="w-96 bg-gray-100 px-10 py-5 shadow-lg rounded-md">
          <div>
            <h1 className="text-2xl text-black font-bold mb-3">Sign Up</h1>
          </div>
         <form onSubmit={handleSubmit(onSubmit)}>
     
      <div  >
      <label  className="label">
       Name
        
      </label>
      <input
                            type="name"
                            placeholder="Your Name"
                              className="w-full border-2 border-gray-500 rounded px-5 text-lg text-center"
                            {...register("name", {
                              required: {
                                 value: true,
                                 message:'Name is required'
                              }
                              
                          })}
                        />
      <label  className="label">
    
      </label>
      </div>

      
     <div  className="my-4">
      <label  className="label">
        Email
        
      </label>
      <input
                            type="email"
                            placeholder="Your Email"
                             className="w-full border-2 border-gray-500 rounded px-5 text-lg text-center"
                            {...register("email", {
                                required: {
                                   value: true,
                                   message:'Email is required'
                                }
                               
                            })}
                        />
      <label  className="label">
      {errors?.email?.type === 'required' && <span  className=" text-red-500">{errors?.email?.message}</span>}  
      </label>
      </div>
<div  >
      <label  className="label">
        Password
        
      </label>
      <input
                            type="password"
                            placeholder="Password"
                             className="w-full border-2 border-gray-500 rounded px-5 text-lg text-center"
                            {...register("password", {
                                required: {
                                   value: true,
                                   message:'password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'password min length 6 caractor'
                                }
                            })}
                        />
      <label  className="label">
      {errors?.password?.type === 'required' && <span  className=" text-red-500">{errors?.password?.message}</span>}
      {errors?.password?.type === 'minLength' && <span  className=" text-red-500">{errors?.password?.message}</span>}
      
        
              </label>
               {errorMassage}
      </div>
            <div className="flex justify-center my-6">
              <input className="px-7 py-2 bg-black text-white border border-black text-xl hover:text-black hover:bg-white cursor-pointer" type="submit" value="Sign up" />
            </div>
            
    </form>
      </div>
     </div>
    </div>
  );
};

export default SignUp;