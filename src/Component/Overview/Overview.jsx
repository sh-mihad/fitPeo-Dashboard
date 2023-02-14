import React from 'react';
import EarningCharts from '../../Charts/EarningCharts/EarningCharts';
import EearningDeatils from '../EarningDetails/EearningDeatils';

const Overview = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 drop-shadow-lg rounded-lg my-5 p-5 bg-white'>

            <div className=''>
                <p className='mb-5 text-gray-700 text-start text-lg font-semibold'>Overview</p>


                {/*---------- Earing Summary------ */}
                <div>
                    <p className='text-sm text-gray-400 my-2'>This Month</p>
                    <div className='flex gap-3 text-center  items-center '>
                    <h6 className='text-2xl font-semibold'>$24,568</h6>
                        <p className={`text-xs font-light text-gray-500 bg-green-200 px-3 rounded-lg`}>+ 2.65%</p>
                    </div>
                </div>

                {/* ---------Earnig Details---------- */}
                <div className='grid grid-cols-1 lg:grid-cols-2 my-4'>
                   <EearningDeatils data={"Orders"} number={"5,643"}/> 
                   <EearningDeatils data={"Sales"} number={"16,273"}/> 
                   <EearningDeatils data={"Order V.."} number={"12.03%"}/> 
                   <EearningDeatils data={"Customers"} number={"21456"}/> 
                   <EearningDeatils data={"Income"} number={"35,643"}/> 
                   <EearningDeatils data={"Expenses"} number={"12,248"}/> 
                </div>

            </div>


            {/* Section for overview chart */}
            <div className=' col-span-1 lg:col-span-2'>
                <p className='mb-5 text-gray-700 text-end text-base font-semibold'>Sort By: <small>Yearly</small> </p>
                <div className='h-96'>
            
                <EarningCharts/>
                </div>
            </div>
        </div>
    );
};

export default Overview;