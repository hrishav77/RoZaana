import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myPieChart = new Chart(ctx, {
      type: "pie", // Specify the chart type
      data: {
        labels: ["Category 1", "Category 2", "Category 3"], // Labels for the pie slices
        datasets: [
          {
            label: "My Pie Chart",
            data: [10, 20, 30], // Data for each slice
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true, // Makes the chart responsive
        plugins: {
          legend: {
            position: "top", // Position of the legend
          },
          tooltip: {
            enabled: true, // Enable tooltips
          },
        },
      },
    });

    return () => {
      // Clean up the chart when the component unmounts
      myPieChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} width="400" height="400"></canvas>;
};

export default PieChart;
