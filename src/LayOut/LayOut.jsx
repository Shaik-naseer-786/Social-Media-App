import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";


// pages.........
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import ChatBox from "../Pages/ChatBox/ChatBox";


//components
import Nav from "../components/nav/Nav";
import LeftBar from "../components/LeftBar/LeftBar";
import RightBar from "../components/RightBar/RightBar";
const LayOut = () => {
  //Feed .......
  const Feed=()=>{
    return(
      <>
      <Nav></Nav>
        <main>
          <LeftBar></LeftBar>
          <div className="container">
            <Outlet></Outlet>
          </div>
          <RightBar></RightBar>
        </main>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Feed></Feed>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/profile/:id',
          element:<Profile></Profile>
        },
        {
          path:'/chatbox/id',
          element:<ChatBox></ChatBox>
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default LayOut;
