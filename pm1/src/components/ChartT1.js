import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

export default function ChartT1({chartData}) {
    return(
        <div>
            <h1 className='brand' style={{fontSize: "50px"}}>P1</h1>
            <div style={{width: "400px"}}>
                <Line data={chartData} />
            </div>
        </div>
    )
}