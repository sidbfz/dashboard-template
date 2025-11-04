"use client";

import { useChartColors } from "@/hooks/use-chart-colors";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type PropsType = {
  data: {
    name: string;
    percentage: number;
  }[];
};

export function PerformanceMetricsChart({ data }: PropsType) {
  const { theme } = useTheme();
  const chartColors = useChartColors();
  const [options, setOptions] = useState<ApexOptions>({});

  useEffect(() => {
    setOptions({
      chart: {
        fontFamily: "Satoshi, sans-serif",
        type: "radialBar",
      },
      colors: [...chartColors.primary],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "30%",
            background: "transparent",
          },
          track: {
            background: theme === "dark" ? "#2a3342" : "#f1f5f9",
            strokeWidth: "100%",
            margin: 8,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: data.map((item) => item.name),
      legend: {
        show: false,
      },
    });
  }, [theme, data]);

  return (
    <div className="relative">
      <ReactApexChart
        options={options}
        series={data.map((item) => item.percentage)}
        type="radialBar"
        height={280}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-3xl font-bold text-dark dark:text-white">85%</div>
        <div className="text-sm text-body">Overall</div>
      </div>
    </div>
  );
}
