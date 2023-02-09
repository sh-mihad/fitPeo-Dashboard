import React from 'react';
import SummaryCard from '../../Component/SummaryCard/SummaryCard';

const Dashboard = () => {
    return (
        <div className='block lg:flex '>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <SummaryCard/>
                <SummaryCard/>
                <SummaryCard/>
            </div>
            <div>profile content</div>
        </div>
    );
};

export default Dashboard;