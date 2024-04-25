import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Day 1',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Day 2',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Day 3',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Day 4',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Day 5',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Day 6',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Day 7',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
export function BasicLineChart() {

    // render(){
        return (
            <div>
                {/* <h3>
                    Fake kubecost metrics!
                </h3> */}

                {/* <ResponsiveContainer width="100%" height="100%"> */}
                    <LineChart
                        width={550}
                        height={200}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                {/* </ResponsiveContainer> */}
            </div>
        )
    // }
}

