export async function getOverviewData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    views: {
      value: 12847,
      growthRate: 18.43,
    },
    profit: {
      value: 28450,
      growthRate: 24.35,
    },
    products: {
      value: 8924,
      growthRate: 12.59,
    },
    users: {
      value: 15632,
      growthRate: 8.75,
    },
  };
}

export async function getChatsData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      name: "Alex Thompson",
      profile: "/images/user/user-02.png",
      isActive: true,
      lastMessage: {
        content: "The Q4 report looks fantastic! 🎉",
        type: "text",
        timestamp: "2025-11-04T14:30:00Z",
        isRead: false,
      },
      unreadCount: 5,
    },
    {
      name: "Jessica Williams",
      profile: "/images/user/user-06.png",
      isActive: true,
      lastMessage: {
        content: "Can we schedule a demo for Friday?",
        type: "text",
        timestamp: "2025-11-04T13:15:00Z",
        isRead: false,
      },
      unreadCount: 2,
    },
    {
      name: "Michael Brown",
      profile: "/images/user/user-08.png",
      isActive: true,
      lastMessage: {
        content: "Just shipped the new feature! 🚀",
        type: "text",
        timestamp: "2025-11-04T11:45:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
    {
      name: "Sophia Martinez",
      profile: "/images/user/user-09.png",
      isActive: false,
      lastMessage: {
        content: "Thanks for the feedback on the design",
        type: "text",
        timestamp: "2025-11-04T09:20:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
    {
      name: "James Wilson",
      profile: "/images/user/user-10.png",
      isActive: false,
      lastMessage: {
        content: "Meeting notes are in the shared doc",
        type: "text",
        timestamp: "2025-11-03T16:30:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
  ];
}