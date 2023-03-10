import React from 'react';
import { BsSearch,BsGrid,BsBell,BsGearFill} from "react-icons/bs";
import { Link } from 'react-router-dom';

const TopBar = () => {
    
    return (
        <div className="navbar bg-base-100 shadow-lg rounded-lg">

            {/* Button for open sidebar in mobile device */}
            <label  htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            

            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case hidden lg:block lg:text-xl">Dashboard</Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">

                    {/* --------Seach Icon -------*/}
                    <label className="btn btn-ghost btn-circle  text-lg">
                       <BsSearch/>
                    </label>

                    {/* -----flag-------  */}
                    <label className="btn btn-ghost ">
                       <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" className='w-5' alt="" />
                    </label>

                    {/* Grid Icon */}
                    <label className="btn btn-ghost btn-circle text-lg">
                       <BsGrid/>
                    </label>
                    
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator text-lg">
                           <BsBell/>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>


                     {/* Grid Icon */}
                    <label className="btn btn-ghost btn-circle text-lg">
                       <BsGearFill/>
                    </label>

                        {/* Notification Modal */}
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopBar;