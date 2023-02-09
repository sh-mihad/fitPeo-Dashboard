import React from 'react';
import SummaryCard from '../../Component/SummaryCard/SummaryCard';
import { BsFillPieChartFill } from "react-icons/bs";

const Dashboard = () => {
    return (
        <div className='block lg:flex gap-5'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                <SummaryCard  title={"Revenue"} actualData={"$21,456"} percantige={"+2.65%"}/>
                <SummaryCard title={"Orders"} actualData={"5,643"} percantige={"-0.82%"}/>
                <SummaryCard title={"Customers"} actualData={"45,254"} percantige={"-1.04%"}/>
            </div>
            <div>profile content</div>
        </div>
    );
};

export default Dashboard;