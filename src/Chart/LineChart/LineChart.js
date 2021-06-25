import React from 'react';
import { Line } from 'react-chartjs-2';
import "./LineChart.css";

const LineChart = ({ lables, dataInput, lableName }) => {
    const dataset = {
        labels: lables,
        datasets: [{
            axis: 'y',
            label: lableName,
            data: dataInput,
            fill: false,
            borderColor: [
                'rgb(255, 99, 132)',

            ],
            borderWidth: 1
        }]
    };
    return (
        <div className="LineChart">
            <Line
                data={dataset}
                options={
                    {
                        title: {
                            display: true,
                            fontSize: 3
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }
                }
            />
        </div>

    );
};

export default LineChart;