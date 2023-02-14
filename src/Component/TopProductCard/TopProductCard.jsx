import React from 'react';
import TopProductCardData from '../TopProductCardData/TopProductCardData';

const TopProductCard = () => {
    return (
        <div className='p-4 bg-white drop-shadow rounded-lg'>
            <div className='flex items-center justify-between '>
                <p className='mb-5 text-gray-700 text-start text-lg font-semibold'>Top Product</p>
            </div>

            {/* ---------top product details----------- */}
           <TopProductCardData num={1} name={"Polo blue T-shirt"} price={25.4} TotalSell={"3.82k"}/>
           <TopProductCardData num={2} name={"Hoodie for men"} price={25.4} TotalSell={"3.14k"}/>
           <TopProductCardData num={3} name={"Red color Cap"} price={25.4} TotalSell={"2.84k"}/>
           <TopProductCardData num={4} name={"Pocket T-shirt"} price={25.4} TotalSell={"2.02k"}/>
           
          
        </div>
    );
};

export default TopProductCard;