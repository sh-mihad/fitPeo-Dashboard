import React from 'react';
import { BsFillPieChartFill } from "react-icons/bs";


const SummaryCard = ({icon,title,actualData,percantige})=>{
    return (
        <div className='flex bg-white p-5  rounded-lg gap-5 drop-shadow-md'>
            <div className='p-3 rounded-lg bg-[#2c698d] text-xl text-white'><BsFillPieChartFill/></div>

            <div>
            <p className='text-sm font-light text-gray-500 '>Revenue</p>
            <div className='flex gap-7 items-center'>
            <h6 className='text-xl font-semibold'>$21,456</h6>
            <p className='text-xs font-light text-gray-500 bg-green-200 px-3 rounded-lg'>+ 2.65%</p>
            </div>
               
            </div>

           
        </div>
    )
}

export default SummaryCard