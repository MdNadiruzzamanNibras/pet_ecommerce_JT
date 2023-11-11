import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../page/login/SignUp";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Detail from "../page/Detail/Detail";
import RequireAuth from "../page/login/RequireAuth";
import AddTofavourite from "../page/Favourite/AddTofavourite";

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
    path: "/pet/:id",
        element: <RequireAuth><Detail /></RequireAuth>,
        
      },
      {
    path: "/favourite",
        element: <AddTofavourite></AddTofavourite>,
        
      },
      {
    path: "/signup",
        element: <SignUp />,
        
      },
      {
    path: "/login",
        element: <Login/>,
        
  },
        ]
        
  },
  
]);