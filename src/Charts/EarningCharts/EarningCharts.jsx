import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import {mockBarData}  from "../../mockDataForBarChart"

const EarningCharts = () => {
    return (
        <ResponsiveBar
        data={mockBarData}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 80, bottom: 50, left: 60 }}
        innerPadding={3}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: false }}
        colors={{ scheme: 'blues' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderRadius={5}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    '1.5'
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableLabel={false}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.9'
                ]
            ]
        }}
        legends={[]}
        role="application"
        isFocusable={true}
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
    );
};

export default EarningCharts;