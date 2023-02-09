import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import TopBar from '../Component/TopBar/TopBar';

// ----------------Icons -------------
import { AiOutlineAppstore ,AiOutlineCalendar} from "react-icons/ai";
import { BsChatDots,BsFillFileEarmarkPostFill,BsShop,BsEnvelope,BsFillJournalBookmarkFill,BsBoundingBoxCircles,BsWifi,BsWallet,BsShieldX } from "react-icons/bs";


const DashBoardLayout = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />


            <div className="drawer-content bg-[#f1f3f7]  lg:px-4">
                {/* <!-- Page content here --> */}
                <TopBar/>
               <div className='mx-4 lg:mx-0 mt-5'> <Outlet></Outlet></div>
            </div>


            {/*----------- Sidebar ------- */}
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                <ul className="menu p-4 w-52 bg-slate-900  text-gray-400 ">
                    {/* <!-- Sidebar content here --> */}
                    <li className="hover:text-white "><Link to="/"><AiOutlineAppstore/> Dashboard</Link></li>
                    <li className="hover:text-white "><Link to="/calendar"><AiOutlineCalendar/>Calendar</Link></li>
                    <li className="hover:text-white "><Link to="/chat"><BsChatDots/> Chat</Link></li>
                    <li className="hover:text-white "><Link to="/file-maneger"><BsFillFileEarmarkPostFill/>File Manager</Link></li>
                    <li className="hover:text-white "><Link to="/file-maneger"><BsShop/>Ecommerce</Link></li>
                    <li className="hover:text-white "><Link to="/file-maneger"><BsEnvelope/>Email</Link></li>
                    <li className="hover:text-white "><Link to="/file-maneger"><BsFillJournalBookmarkFill/>Invoices</Link></li>
                    <li className="hover:text-white "><Link to="/file-maneger"><BsBoundingBoxCircles/>Projcets</Link></li>
                    <li className="hover:text-white "><Link to="/file-maneger"><BsWifi/> Contacts</Link></li>
                    <li className="hover:text-white "><Link to="/file-maneger"> <BsWallet/>Horizontal</Link></li>
                    <li className="hover:text-white "><Link to="/file-maneger"><BsShieldX/> Authentication</Link></li>
                   
                </ul>

            </div>
        </div>
    );
};

export default DashBoardLayout;