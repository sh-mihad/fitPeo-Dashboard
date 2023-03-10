import React from 'react';

const Activity = ({date,month,data}) => {
    return (
        <div className='flex gap-3 text-center items-center justify-start my-5'>
            <div className={`text-sm font-semibold text-black   bg-gray-200  rounded-lg lg:px-2 py-2 px-6`}>
                <p>{date}</p> 
                <p>{month}</p>
            </div>
            <p className='text-sm text-gray-400 text-start'>{data}</p>
        </div>
    );
};

export default Activity;