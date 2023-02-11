import React from 'react';

const EearningDeatils = ({data,number}) => {
    return (
        <div className='my-3 text-center border-b border-r py-2'>
            <p className='text-sm text-gray-400 '>{data}</p>
            <h3 className='text-lg font-semibold'>{number}</h3>

        </div>
    );
};

export default EearningDeatils;