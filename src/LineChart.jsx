import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ modelData }) => {
  const [chartData, setChartData] = useState(null); // Start with null to indicate no data

  useEffect(() => {
    if (modelData && modelData.labels && modelData.values) {
      const data = {
        labels: modelData.labels, // Use model labels
        datasets: [
          {
            label: 'Dataset 1',
            data: modelData.values, // Use model values
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
          },
        ],
      };
      setChartData(data); // Update chart data when modelData changes
    }
  }, [modelData]);

  console.log("Received Data: ", modelData);
  console.log("Labels: ", modelData.labels);
  console.log("Values: ", modelData.values);
  console.log("Chart Data: ", chartData)

  // If chartData is null, it means there's no data to display yet
  if (!chartData) {
    return <p>Loading chart data...</p>;
  }

  return <Line data={chartData} />;
};

export default LineChart;
