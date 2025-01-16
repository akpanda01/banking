"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  accounts: Array<any>; // Replace `any` with the actual type of accounts if known
};

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750], // Replace with dynamic data from `accounts`
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"], // Example colors
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"], // Replace with dynamic labels based on `accounts`
  };

  return <Doughnut 
  data={data}
  options = {{
    cutout:'60%',
    plugins: {
        legend:{
            display:false
        }
    }
  }} />;
};

export default DoughnutChart;
