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
  data: {
    current: DataPoint[];
    previous: DataPoint[];
  };
};

export function RevenueGrowthChart({ data }: PropsType) {
  const { theme } = useTheme();
  const chartColors = useChartColors();
  const [options, setOptions] = useState<ApexOptions>({});

  useEffect(() => {
    setOptions({
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "14px",
        labels: {
          colors: theme === "dark" ? "#dee4ee" : "#64748b",
        },
        markers: {
          size: 5,
          offsetX: -3,
        },
        itemMargin: {
          horizontal: 10,
        },
      },
      colors: [...chartColors.secondary],
      chart: {
        fontFamily: "Satoshi, sans-serif",
        height: 335,
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      responsive: [
        {
          breakpoint: 1536,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 3,
              },
            },
          },
        },
      ],
      stroke: {
        width: [3, 3],
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.3,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 100],
        },
      },
      grid: {
        borderColor: theme === "dark" ? "#313d4f" : "#e2e8f0",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 4,
        strokeWidth: 3,
        hover: {
          size: 6,
        },
      },
      xaxis: {
        categories: data.current.map((item) => item.x),
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
          text: "Revenue ($K)",
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
  }, [theme, data, chartColors]);

  return (
    <div className="px-6 pb-6 pt-5.5">
      <ReactApexChart
        options={options}
        series={[
          {
            name: "Current Year",
            data: data.current.map((item) => item.y),
          },
          {
            name: "Previous Year",
            data: data.previous.map((item) => item.y),
          },
        ]}
        type="area"
        height={335}
      />
    </div>
  );
}
