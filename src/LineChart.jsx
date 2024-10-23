import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = ({ modelData }) => {
  const [chartData, setChartData] = useState(null); // Start with null to indicate no data

  useEffect(() => {
    console.log("Model data was updated...")
    console.log(modelData, modelData.x, modelData.y)
    if (modelData && modelData.x.length > 0 && modelData.y.length > 0) {
      const data = {
        labels: modelData.x, // Use model x values as labels
        datasets: [
          {
            label: 'Dataset 1',
            data: modelData.y, // Use model y values for the dataset
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
          },
        ],
      };
      setChartData(data); // Update chart data when modelData changes
    }
  }, [modelData]);

  console.log("Received Data: ", modelData);
  console.log("X Values: ", modelData.x);
  console.log("Y Values: ", modelData.y);
  console.log("Chart Data: ", chartData);

  const options = {
    scales: {
      x: {
        type: 'linear', // Set the x-axis to linear
        position: 'bottom', // Positioning
      },
      y: {
        beginAtZero: true, // Ensure y-axis starts at 0
      },
    },
  };


  // If chartData is null, it means there's no data to display yet
  if (!chartData) {
    return <p>Loading chart data...</p>;
  }

  return <Line data={chartData} options={options} />;
};

export default LineChart;
