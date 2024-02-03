import React, { useEffect, useRef } from "react";
import "../App.css";
import { Chart } from "chart.js/auto";
const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ["00:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00"],
        datasets: [
          {
            label: "",
            data: [
              10, 20, 20, 50, 20, 50, 5, 45, 46, 45, 45, 49, 10, 10, 11, 12, 13,
              14,
            ],
            borderColor: "rgb(2, 132, 199)",
            borderWidth: 1,
            pointRadius: 0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              stepSize: 10, // Set the step size to 10 for Y-axis ticks
            },
          },
        },
        elements: {
          line: {
            fill: false, // Do not fill the area under the line
          },
        },
        plugins: {
          tooltip: {
            enabled: false, // Disable tooltip on hover
          },
        },
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="line-chart">
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineChart;
