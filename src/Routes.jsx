import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Login from "./Login";
import Sigup from "./Sigup";
import NewsDetail from "./NewsDetail";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),   
            },
           
            {
                path: '/login',
                element: <Login></Login>
                
            },
            {
                path: '/news/:id',
                element: <PrivetRout><NewsDetail></NewsDetail></PrivetRout>
            },
           
            {
                path: '/sigup',
                element: <Sigup></Sigup>
            }
        ]
    }
])



  export default router
