import React from 'react';
import SummaryCard from '../../Component/SummaryCard/SummaryCard';
import { BsFillPieChartFill } from "react-icons/bs";
import UserProfile from '../../Component/UserProfile/UserProfile';

const Dashboard = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-4 gap-5 items-start'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 col-span-1 lg:col-span-3'>
                <SummaryCard  title={"Revenue"} actualData={"$21,456"} percantige={"+2.65%"}/>
                <SummaryCard title={"Orders"} actualData={"5,643"} percantige={"-0.82%"}/>
                <SummaryCard title={"Customers"} actualData={"45,254"} percantige={"-1.04%"}/>
            </div>
            <div>
                <UserProfile/>
            </div>
        </div>
    );
};

export default Dashboard;