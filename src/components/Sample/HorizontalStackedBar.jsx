import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["00:00", "01:00", "02:00", "03:00", "04:00"], // Replace with your hour labels
  datasets: [
    {
      label: "Red",
      data: [25, 38, 15, 42, 20], // Replace with your red values
      backgroundColor: "rgba(255, 99, 132, 0.5)", // Adjust color as needed
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Yellow",
      data: [12, 20, 30, 18, 25], // Replace with your yellow values
      backgroundColor: "rgba(255, 206, 86, 0.5)", // Adjust color as needed
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 1,
    },
    {
      label: "Sky Blue",
      data: [5, 10, 15, 8, 12], // Replace with your sky blue values
      backgroundColor: "rgba(86, 170, 255, 0.5)", // Adjust color as needed
      borderColor: "rgba(86, 170, 255, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const HorizontalStackedBar = () => {
  return (
    <div style={{ width: 600, height: 300 }}>
      {" "}
      {/* Adjust width and height */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalStackedBar;
