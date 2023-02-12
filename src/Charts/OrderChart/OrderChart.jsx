import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';



const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },

];

const OrderChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={"100%"} height={"100%"}>
                <Pie dataKey="value" data={data02} innerRadius={50} outerRadius={80} fill="#82ca9d" />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default OrderChart;