"use client";

import { useChartColors } from "@/hooks/use-chart-colors";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type DataPoint = { x: string; y: number };

type PropsType = {
  data: DataPoint[];
};

export function SalesByCategoryChart({ data }: PropsType) {
  const { theme } = useTheme();
  const chartColors = useChartColors();
  const [options, setOptions] = useState<ApexOptions>({});

  useEffect(() => {
    setOptions({
      colors: [...chartColors.quaternary],
      chart: {
        fontFamily: "Satoshi, sans-serif",
        height: 335,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 8,
          columnWidth: "50%",
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: [theme === "dark" ? "#dee4ee" : "#64748b"],
        },
        formatter: (value) => `$${value}K`,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      grid: {
        borderColor: theme === "dark" ? "#313d4f" : "#e2e8f0",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        categories: data.map((item) => item.x),
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: theme === "dark" ? "#64748b" : "#637381",
            fontSize: "14px",
            fontFamily: "Satoshi",
            fontWeight: 500,
          },
        },
      },
      yaxis: {
        title: {
          text: "Sales ($K)",
          style: {
            fontSize: "14px",
            fontWeight: 500,
            color: theme === "dark" ? "#64748b" : "#637381",
          },
        },
        labels: {
          style: {
            colors: theme === "dark" ? "#64748b" : "#637381",
            fontSize: "14px",
            fontFamily: "Satoshi",
            fontWeight: 500,
          },
          formatter: (value) => `$${value}K`,
        },
      },
      tooltip: {
        theme: theme === "dark" ? "dark" : "light",
        y: {
          formatter: (value) => `$${value}K`,
        },
      },
    });
  }, [theme, chartColors]);

  return (
    <div className="px-6 pb-6 pt-5.5">
      <ReactApexChart
        options={options}
        series={[
          {
            name: "Sales",
            data: data.map((item) => item.y),
          },
        ]}
        type="bar"
        height={335}
      />
    </div>
  );
}
