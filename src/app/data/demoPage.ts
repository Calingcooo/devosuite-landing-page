import {
    LuChartBar,
    LuUsers,
    LuClock,
} from "react-icons/lu";

export const demoOverView = [
    { id: 1, title: "Dashboard and analytics overview" },
    { id: 2, title: "Inventory management workflow" },
    { id: 3, title: "Sales and CRM features" },
    { id: 4, title: "Financial reporting and accounting" },
    { id: 5, title: "HR and employee management" },
];

export const demoCardDetails = [
    {
        id: 1,
        icon: LuChartBar,
        title: "Real-Time Analytics",
        description:
            "See how our dashboard provides instant insights into your business performance with customizable reports and KPI tracking.",
        list: [
            "Live sales and inventory tracking",
            "Custom dashboard widgets",
            "Automated report generation",
        ],
    },
    {
        id: 2,
        icon: LuUsers,
        title: "Multi-Module Integration",
        description:
            "Watch how seamlessly our modules work together - from sales orders to inventory updates to financial records.",
        list: [
            "Unified data across all modules",
            "Automated workflows",
            "Role-based access controls",
        ],
    },
    {
        id: 3,
        icon: LuClock,
        title: "Quick Setup Process",
        description:
            "Learn how you can get DevoSuite up and running in your business within minutes, not days.",
        list: [
            "Guided setup wizard",
            "Data import tools",
            "Template configurations",
        ],
    },
];