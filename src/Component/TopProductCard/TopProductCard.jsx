import React from 'react';
import TopProductCardData from '../TopProductCardData/TopProductCardData';

const TopProductCard = () => {
    return (
        <div className='p-4 bg-white drop-shadow rounded-lg'>
            <div className='flex items-center justify-between '>
                <p className='mb-5 text-gray-700 text-start text-lg font-semibold'>Top Product</p>
            </div>

            {/* ---------top product details----------- */}
           <TopProductCardData/>
           <TopProductCardData/>
           <TopProductCardData/>
           <TopProductCardData/>
           <TopProductCardData/>
        </div>
    );
};

export default TopProductCard;