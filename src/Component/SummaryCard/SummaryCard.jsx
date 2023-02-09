import React from 'react';
import { BsFillPieChartFill,BsHandbagFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";


const SummaryCard = ({title,actualData,percantige})=>{

    console.log(parseFloat(percantige))
    return (
        <div className='flex bg-white p-5  rounded-lg gap-5 drop-shadow-md'>
            <div className='p-3 rounded-lg bg-[#2c698d] text-xl text-white self-center'>
               
               {
                title === "Revenue" && < BsFillPieChartFill/> 
                
               }
               {
                title === "Orders" && < BsHandbagFill/> 

               }
               {
                title === "Customers" && < FaUserFriends/> 

               }
               </div>

            <div>
            <p className='text-sm font-light text-gray-500 '>{title}</p>
            <div className='flex gap-7 items-center'>
            <h6 className='text-xl font-semibold'>{actualData}</h6>
            <p className={`text-xs font-light text-gray-500 bg-green-200 px-3 rounded-lg ${parseFloat(percantige)<1 ? "bg-red-400 text-black" : "bg-green-300"}`}>{percantige}</p>
            </div>
               
            </div>

           
        </div>
    )
}

export default SummaryCard