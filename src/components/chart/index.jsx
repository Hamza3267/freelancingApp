import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
    // Set up state for chart data
    const [chartData, setChartData] = useState({
      options: {
        chart: {
          id: 'line-chart',
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
      },
      series: [
        {
          name: 'Series 1',
          data: [30, 40, 25, 50, 49, 21, 70, 51, 60, 80, 45, 30],
        },
      ],
    });
  
    return (
      <div style={{width:"100%"}}>
      
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
      </div>
    );
  };
  
  export default LineChart;
  
