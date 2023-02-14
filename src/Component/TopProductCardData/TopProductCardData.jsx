import React from 'react';

const TopProductCardData = ({num,name,price,TotalSell}) => {
    return (
        <div className='flex items-center justify-between mb-7 gap-3'>
            <div className='flex-none text-sm bg-blue-500 p-2 text-white rounded-xl'>#{num}</div>
            <div className='grow text-sm text-gray-600'>
                <p className='text-sm'>{name}</p>
                <p className='text-sm font-bold'>${price}</p>
            </div>
            <div className='fle flex-none bg-gray-200 px-3 text-sm py-1 rounded-xl'>{TotalSell}</div>
        </div>
    );
};

export default TopProductCardData;