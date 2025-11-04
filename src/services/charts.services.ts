export async function getDevicesUsedData(
  timeFrame?: "monthly" | "yearly" | (string & {}),
) {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = [
    {
      name: "Desktop",
      percentage: 0.52,
      amount: 8234,
    },
    {
      name: "Mobile",
      percentage: 0.35,
      amount: 5543,
    },
    {
      name: "Tablet",
      percentage: 0.11,
      amount: 1742,
    },
    {
      name: "Unknown",
      percentage: 0.02,
      amount: 317,
    },
  ];

  if (timeFrame === "yearly") {
    data[0].amount = 98808;
    data[1].amount = 66516;
    data[2].amount = 20904;
    data[3].amount = 3804;
  }

  return data;
}

export async function getPaymentsOverviewData(
  timeFrame?: "monthly" | "yearly" | (string & {}),
) {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (timeFrame === "yearly") {
    return {
      received: [
        { x: 2020, y: 1850 },
        { x: 2021, y: 2420 },
        { x: 2022, y: 3180 },
        { x: 2023, y: 3920 },
        { x: 2024, y: 4580 },
      ],
      due: [
        { x: 2020, y: 2180 },
        { x: 2021, y: 2520 },
        { x: 2022, y: 2850 },
        { x: 2023, y: 3100 },
        { x: 2024, y: 2200 },
      ],
    };
  }

  return {
    received: [
      { x: "Jan", y: 42 },
      { x: "Feb", y: 51 },
      { x: "Mar", y: 58 },
      { x: "Apr", y: 67 },
      { x: "May", y: 61 },
      { x: "Jun", y: 73 },
      { x: "Jul", y: 82 },
      { x: "Aug", y: 75 },
      { x: "Sep", y: 88 },
      { x: "Oct", y: 95 },
      { x: "Nov", y: 87 },
      { x: "Dec", y: 98 },
    ],
    due: [
      { x: "Jan", y: 35 },
      { x: "Feb", y: 29 },
      { x: "Mar", y: 41 },
      { x: "Apr", y: 52 },
      { x: "May", y: 45 },
      { x: "Jun", y: 78 },
      { x: "Jul", y: 92 },
      { x: "Aug", y: 81 },
      { x: "Sep", y: 96 },
      { x: "Oct", y: 104 },
      { x: "Nov", y: 91 },
      { x: "Dec", y: 82 },
    ],
  };
}

export async function getWeeksProfitData(timeFrame?: string) {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (timeFrame === "last week") {
    return {
      sales: [
        { x: "Sat", y: 78 },
        { x: "Sun", y: 92 },
        { x: "Mon", y: 86 },
        { x: "Tue", y: 105 },
        { x: "Wed", y: 68 },
        { x: "Thu", y: 88 },
        { x: "Fri", y: 98 },
      ],
      revenue: [
        { x: "Sat", y: 35 },
        { x: "Sun", y: 42 },
        { x: "Mon", y: 38 },
        { x: "Tue", y: 28 },
        { x: "Wed", y: 32 },
        { x: "Thu", y: 45 },
        { x: "Fri", y: 40 },
      ],
    };
  }

  return {
    sales: [
      { x: "Sat", y: 92 },
      { x: "Sun", y: 108 },
      { x: "Mon", y: 95 },
      { x: "Tue", y: 118 },
      { x: "Wed", y: 82 },
      { x: "Thu", y: 96 },
      { x: "Fri", y: 112 },
    ],
    revenue: [
      { x: "Sat", y: 42 },
      { x: "Sun", y: 48 },
      { x: "Mon", y: 45 },
      { x: "Tue", y: 35 },
      { x: "Wed", y: 38 },
      { x: "Thu", y: 52 },
      { x: "Fri", y: 47 },
    ],
  };
}

export async function getCampaignVisitorsData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    total_visitors: 1_284_000,
    performance: 12.8,
    chart: [
      { x: "S", y: 245 },
      { x: "S", y: 512 },
      { x: "M", y: 378 },
      { x: "T", y: 456 },
      { x: "W", y: 398 },
      { x: "T", y: 428 },
      { x: "F", y: 534 },
    ],
  };
}

export async function getVisitorsAnalyticsData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    312, 485, 398, 567, 423, 456, 612, 345, 534, 678, 589, 412, 498, 567, 634,
    478, 589, 412, 389, 645, 498, 578, 645, 512, 623, 467, 534, 598, 712, 645,
  ].map((value, index) => ({ x: index + 1 + "", y: value }));
}

export async function getCostsPerInteractionData() {
  return {
    avg_cost: 560.93,
    growth: 2.5,
    chart: [
      {
        name: "Google Ads",
        data: [
          { x: "Sep", y: 15 },
          { x: "Oct", y: 12 },
          { x: "Nov", y: 61 },
          { x: "Dec", y: 118 },
          { x: "Jan", y: 78 },
          { x: "Feb", y: 125 },
          { x: "Mar", y: 165 },
          { x: "Apr", y: 61 },
          { x: "May", y: 183 },
          { x: "Jun", y: 238 },
          { x: "Jul", y: 237 },
          { x: "Aug", y: 235 },
        ],
      },
      {
        name: "Facebook Ads",
        data: [
          { x: "Sep", y: 75 },
          { x: "Oct", y: 77 },
          { x: "Nov", y: 151 },
          { x: "Dec", y: 72 },
          { x: "Jan", y: 7 },
          { x: "Feb", y: 58 },
          { x: "Mar", y: 60 },
          { x: "Apr", y: 185 },
          { x: "May", y: 239 },
          { x: "Jun", y: 135 },
          { x: "Jul", y: 119 },
          { x: "Aug", y: 124 },
        ],
      },
    ],
  };
}

export async function getRevenueGrowthData(
  timeFrame?: "This Month" | "Last Month" | "This Quarter" | (string & {}),
) {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (timeFrame === "Last Month") {
    return {
      current: [
        { x: "Week 1", y: 125 },
        { x: "Week 2", y: 158 },
        { x: "Week 3", y: 142 },
        { x: "Week 4", y: 165 },
      ],
      previous: [
        { x: "Week 1", y: 98 },
        { x: "Week 2", y: 112 },
        { x: "Week 3", y: 108 },
        { x: "Week 4", y: 125 },
      ],
    };
  }

  if (timeFrame === "This Quarter") {
    return {
      current: [
        { x: "Jan", y: 485 },
        { x: "Feb", y: 562 },
        { x: "Mar", y: 635 },
      ],
      previous: [
        { x: "Jan", y: 398 },
        { x: "Feb", y: 445 },
        { x: "Mar", y: 512 },
      ],
    };
  }

  return {
    current: [
      { x: "Week 1", y: 145 },
      { x: "Week 2", y: 178 },
      { x: "Week 3", y: 162 },
      { x: "Week 4", y: 195 },
    ],
    previous: [
      { x: "Week 1", y: 112 },
      { x: "Week 2", y: 135 },
      { x: "Week 3", y: 128 },
      { x: "Week 4", y: 148 },
    ],
  };
}

export async function getSalesByCategoryData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { x: "Electronics", y: 345 },
    { x: "Fashion", y: 289 },
    { x: "Home & Garden", y: 234 },
    { x: "Sports", y: 198 },
    { x: "Books", y: 167 },
  ];
}

export async function getUserEngagementData(
  timeFrame?: "Last 7 Days" | "Last 30 Days" | "Last 90 Days" | (string & {}),
) {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (timeFrame === "Last 30 Days") {
    return {
      sessions: [
        { x: "Day 1", y: 1245 },
        { x: "Day 5", y: 1389 },
        { x: "Day 10", y: 1512 },
        { x: "Day 15", y: 1678 },
        { x: "Day 20", y: 1834 },
        { x: "Day 25", y: 1956 },
        { x: "Day 30", y: 2123 },
      ],
      pageViews: [
        { x: "Day 1", y: 3125 },
        { x: "Day 5", y: 3489 },
        { x: "Day 10", y: 3856 },
        { x: "Day 15", y: 4234 },
        { x: "Day 20", y: 4567 },
        { x: "Day 25", y: 4891 },
        { x: "Day 30", y: 5234 },
      ],
    };
  }

  if (timeFrame === "Last 90 Days") {
    return {
      sessions: [
        { x: "Week 1", y: 8456 },
        { x: "Week 3", y: 9234 },
        { x: "Week 5", y: 9856 },
        { x: "Week 7", y: 10234 },
        { x: "Week 9", y: 11012 },
        { x: "Week 11", y: 11567 },
        { x: "Week 13", y: 12234 },
      ],
      pageViews: [
        { x: "Week 1", y: 21234 },
        { x: "Week 3", y: 23456 },
        { x: "Week 5", y: 25123 },
        { x: "Week 7", y: 26789 },
        { x: "Week 9", y: 28456 },
        { x: "Week 11", y: 29867 },
        { x: "Week 13", y: 31234 },
      ],
    };
  }

  return {
    sessions: [
      { x: "Mon", y: 845 },
      { x: "Tue", y: 923 },
      { x: "Wed", y: 1012 },
      { x: "Thu", y: 956 },
      { x: "Fri", y: 1134 },
      { x: "Sat", y: 1289 },
      { x: "Sun", y: 1167 },
    ],
    pageViews: [
      { x: "Mon", y: 2145 },
      { x: "Tue", y: 2389 },
      { x: "Wed", y: 2612 },
      { x: "Thu", y: 2456 },
      { x: "Fri", y: 2923 },
      { x: "Sat", y: 3234 },
      { x: "Sun", y: 2989 },
    ],
  };
}

export function getPerformanceMetricsData() {
  return [
    {
      name: "Customer Satisfaction",
      value: 87,
    },
    {
      name: "Task Completion",
      value: 92,
    },
    {
      name: "Revenue Target",
      value: 78,
    },
    {
      name: "Team Productivity",
      value: 85,
    },
  ];
}