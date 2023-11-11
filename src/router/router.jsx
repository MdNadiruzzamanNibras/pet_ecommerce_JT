import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../page/login/SignUp";
import Home from "../page/home/Home";
import Login from "../page/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
    path: "/signup",
        element: <SignUp />,
        
  },{
    path: "/login",
        element: <Login/>,
        
  },
        ]
        
  },
  
]);