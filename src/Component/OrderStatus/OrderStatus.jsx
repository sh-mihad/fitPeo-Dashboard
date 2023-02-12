import React from 'react';
import OrderChart from '../../Charts/OrderChart/OrderChart';

const OrderStatus = () => {
    return (
        <div className='p-4 bg-white drop-shadow rounded-lg '>
            <div className='flex items-center justify-between '>
                <p className='mb-5 text-gray-700 text-start text-lg font-semibold'>Order Stats</p>
                <p className='mb-5 text-gray-700 text-start text-sm '>...</p>
            </div>

            {/* -------Chart Component---------- */}            
            <div className='h-60 '>
                <OrderChart/>
                <hr />
            </div>
            <div className='grid grid-cols-3'>
                  <div className='text-center font-semibold'>
                    <p className='text-xs text-gray-500 mt-2 mb-1'>Completed</p>
                    <p className='text-xs text-gray-500'>70</p>
                  </div>
                  <div className='text-center font-semibold'>
                    <p className='text-xs text-gray-500 mt-2 mb-1'>Completed</p>
                    <p className='text-xs text-gray-500'>70</p>
                  </div>
                  <div className='text-center font-semibold'>
                    <p className='text-xs text-gray-500 mt-2 mb-1'>Completed</p>
                    <p className='text-xs text-gray-500'>70</p>
                  </div>
            </div>
        </div>
    );
};

export default OrderStatus;