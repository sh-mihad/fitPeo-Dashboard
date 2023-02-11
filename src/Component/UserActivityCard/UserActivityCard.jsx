import React from 'react';
import UserActivityChart from '../../Charts/UserActivityChart/UserActivityChart';


const UserActivityCard = () => {
    return (
        <div className='p-4 bg-white drop-shadow rounded-lg'>
            <div className='flex items-center justify-between'>
                <p className='mb-5 text-gray-700 text-start text-lg font-semibold'>User Activity</p>
                <p className='mb-5 text-gray-700 text-start text-sm '>Weekly</p>
            </div>

            <div>
                <p className='text-sm text-gray-400 my-2'>This Month</p>
                <div className='flex gap-3 text-center  items-center '>
                    <h6 className='text-2xl font-semibold'>16,543</h6>
                </div>
            </div>

            <div className='h-2/4 my-6 -ml-6'>
              <UserActivityChart/>
            </div>

        </div>
    );
};

export default UserActivityCard;