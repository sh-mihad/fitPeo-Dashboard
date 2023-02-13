import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import {mockPieData} from '../../mockDataForBarChart'




const OrdersChart = () => {
   
//    console.log(mockPieData);
    return (
        <ResponsivePie
        data={mockPieData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        startAngle={-180}
        innerRadius={0.65}
        borderColor="black"
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={7}
        arcLinkLabelsTextOffset={0}
        arcLinkLabelsTextColor={{ theme: 'grid.line.stroke' }}
        arcLinkLabelsOffset={-6}
        arcLinkLabelsDiagonalLength={15}
        arcLinkLabelsStraightLength={7}
        arcLinkLabelsThickness={0}
        arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    '3'
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        motionConfig="wobbly"
        legends={[]}
    />
    );
};

export default OrdersChart;