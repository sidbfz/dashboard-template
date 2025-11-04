"use client";

import { cn } from "@/lib/utils";
import { useChartColors } from "@/hooks/use-chart-colors";
import { getPerformanceMetricsData } from "@/services/charts.services";
import { PerformanceMetricsChart } from "./chart";
import { useEffect, useState } from "react";

type PropsType = {
  className?: string;
};

export function PerformanceMetrics({ className }: PropsType) {
  const chartColors = useChartColors();
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await getPerformanceMetricsData();
      setData(result);
    };
    loadData();
  }, []);

  const dataWithPercentage = data.map((item) => ({
    ...item,
    percentage: item.value,
  }));

  return (
    <div
      className={cn(
        "rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <div className="border-b border-stroke px-6 py-5.5 dark:border-dark-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="mb-1.5 text-2xl font-bold text-dark dark:text-white">
              Performance Metrics
            </h2>
            <div className="text-sm font-medium text-body">
              Key performance indicators
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-5.5">
        <PerformanceMetricsChart data={dataWithPercentage} />

        <div className="mt-6 grid grid-cols-2 gap-4">
          {dataWithPercentage.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: chartColors.primary[index] }}
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-dark dark:text-white">
                  {item.name}
                </div>
                <div className="text-xs text-body">{item.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
