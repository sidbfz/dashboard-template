import { cn } from "@/lib/utils";
import { getSalesByCategoryData } from "@/services/charts.services";
import { SalesByCategoryChart } from "./chart";

type PropsType = {
  className?: string;
};

export async function SalesByCategory({ className }: PropsType) {
  const data = await getSalesByCategoryData();

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
              Sales by Category
            </h2>
            <div className="text-sm font-medium text-body">
              Top performing product categories
            </div>
          </div>
        </div>
      </div>

      <SalesByCategoryChart data={data} />
    </div>
  );
}
