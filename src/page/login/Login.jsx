import { useForm } from "react-hook-form"
import {  useCreateUserWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import auth from "../../firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
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
const navigate = useNavigate()
  const location = useLocation()
  
    let from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
   
    try {
       createUserWithEmailAndPassword(data.email, data.password)
    console.log("user create");
    } catch (error) {
      console.log(error);
    }
  }
  if(user){
      navigate(from, { replace: true });
    }
    if(loading){
      return <p>Loading...</p>
    }
     let errorMassage
        if(error){
             errorMassage = <div className='text-red-500'>Error: {error?.message}</div>
        }
  console.log(user, "user");
    return (
         <div className="container mx-auto">
      <div style={{height:"80vh"}} className="flex justify-center items-center">
        <div className="w-96 bg-gray-100 px-10 py-5 shadow-lg rounded-md">
          <div>
            <h1 className="text-2xl text-black font-bold mb-3">Login</h1>
          </div>
         <form onSubmit={handleSubmit(onSubmit)}>
     
     

      
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
              <input className="px-7 py-2 bg-black text-white border border-black text-xl hover:text-black hover:bg-white cursor-pointer" type="submit" value="Login" />
      </div>
            </form>
            <p><small>New to Pet Home  <Link  className='text-blue-700' to='/signup'>Create Account</Link></small></p>

      </div>
     </div>
    </div>
    );
};

export default Login;