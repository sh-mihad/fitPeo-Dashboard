import React from 'react';
import SummaryCard from '../../Component/SummaryCard/SummaryCard';
import { BsFillPieChartFill } from "react-icons/bs";
import UserProfile from '../../Component/UserProfile/UserProfile';
import Overview from '../../Component/Overview/Overview';
import UserActivityCard from '../../Component/UserActivityCard/UserActivityCard';
import OrderStatus from '../../Component/OrderStatus/OrderStatus';

const Dashboard = () => {
    return (
        <section className=' grid grid-cols-1 lg:grid-cols-4 gap-5 items-start'>


            <div className='col-span-1 lg:col-span-3'>

                {/*----------section for title card------- */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>

                    <SummaryCard title={"Revenue"} actualData={"$21,456"} percantige={"+2.65%"} />
                    <SummaryCard title={"Orders"} actualData={"5,643"} percantige={"-0.82%"} />
                    <SummaryCard title={"Customers"} actualData={"45,254"} percantige={"-1.04%"} />

                </div>

                {/*----------section for Overview------- */}
                <div>
                    <Overview />
                </div>

                <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
                    <UserActivityCard/>
                    <OrderStatus/>
                    <UserActivityCard/>
                </div>


            </div>





            {/*----------section for Side-bar User Profile------- */}
            <div>
                <UserProfile />
            </div>
        </section>
    );
};

export default Dashboard;