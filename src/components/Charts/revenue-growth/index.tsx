import { TrendingUpIcon } from "@/assets/icons";
import { PeriodPicker } from "@/components/period-picker";
import { cn } from "@/lib/utils";
import { getRevenueGrowthData } from "@/services/charts.services";
import { RevenueGrowthChart } from "./chart";

type PropsType = {
  className?: string;
  timeFrame?: string;
};

export async function RevenueGrowth({ className, timeFrame }: PropsType) {
  const data = await getRevenueGrowthData(timeFrame);

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
              Revenue Growth
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-body">Year over Year</span>
              <div className="flex items-center gap-1.5 text-green">
                <TrendingUpIcon className="-rotate-6" />
                <span className="text-sm font-medium">+24.5%</span>
              </div>
            </div>
          </div>

          <PeriodPicker
            sectionKey="revenue_growth"
            defaultValue={timeFrame}
            items={["This Month", "Last Month", "This Quarter"]}
          />
        </div>
      </div>

      <RevenueGrowthChart data={data} />
    </div>
  );
}
