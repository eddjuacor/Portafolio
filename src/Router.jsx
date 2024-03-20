import { createBrowserRouter } from "react-router-dom"

import  {Header}  from "./components/header/Header"
import {Coments} from "./components/main/coments/Coments"
import {Info} from "./components/main/info/Info"
import {Projects} from "./components/main/proyects/Projects"
import {Contact} from "./components/main/contact/Contact"



const router =  createBrowserRouter([
    {
        path: "/",
        element:<Header/>,
        children: [
            {
                path: "/",
                element:<Coments/>
            },
            {
                path: "/coments",
                element:<Coments/>
            },
            {
                path: "/info",
                element:<Info/>
            },
            {
                path: "/projects",
                element:<Projects/>
            },
            {
                path: "/contact",
                element:<Contact/>
            }

        ]
    },
   
    

])
export default router
