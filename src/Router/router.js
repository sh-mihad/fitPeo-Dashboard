import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../DashboardLayout/DashBoardLayout";
import Calender from "../Pages/Calender/Calender";
import Chat from "../Pages/Chat/Chat";
import Dashboard from "../Pages/Dashboard/Dashboard";
import FileMageger from "../Pages/FileManeger/FileMageger";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<DashBoardLayout></DashBoardLayout>,
        children:[
            {path:"/",element:<Dashboard/>},
            {path:"/calendar",element:<Calender/>},
            {path:"/chat",element:<Chat/>},
            {path:"/file-maneger",element:<FileMageger/>},
        ]
    }
])