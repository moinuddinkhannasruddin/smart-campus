// routeConfig.js
import { MenuBook } from "@mui/icons-material";
// import ProjectInfo from "@pages/AddProject";
import Customers from "@pages/Customers";
import Dashboard from "@pages/Dashboard";
// import Leads from "@pages/Leads";
// import Performance from "@pages/Performance";
import Profile from "@pages/Profile";
// import Projects from "@pages/Projects";
// import Requests from "@pages/Requests";
// import Stats from "@pages/Stats";
// import Targets from "@pages/Targets";
// import TestComponents from "@pages/TestComponents";
// import Todo from "@pages/Todo";
// import TowerDetails from "@pages/TowerDetails";
const sidebarRouteConfig = [
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    icon: (
      <img
        src="/assets/icons/dashboardIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
    roles: ["user", "admin"], // Roles that have access to this route
  },
  {
    IconButton: <MenuBook />,
    path: "/profile",
    component: Profile,
    name: "Profile",
    roles: ["user", "admin"], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/CustomerIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  // {
  //   IconButton: <MenuBook />,
  //   path: "/stats",
  //   component: Stats,
  //   name: "Stats",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/CustomerIcon.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  // },
  {
    path: "/customers",
    component: Customers,
    name: "Customers",
    roles: ["user", "admin"], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/CustomerIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
  },
  // {
  //   path: "/towerdetails",
  //   component: TowerDetails,
  //   name: "TowerDetails",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/TowerDetailsIcon.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  // },
  // {
  //   path: "/project",
  //   component: Projects,
  //   name: "Projects",
  //   type: "accordian",
  //   children: [
  //     {
  //       name: "Project Info",
  //       path: "project-info",
  //       //ADD YOUR RESPECTIVE COMPONENT HERE
  //       component: ProjectInfo
  //     },
  //     {
  //       name: "Project Inventory",
  //       path: "project-inventory",
  //       //ADD YOUR RESPECTIVE COMPONENT HERE
  //       component: ProjectInfo

  //     },
  //     {
  //       name: "Payment Plan",
  //       path: "payment-plan",
  //       //ADD YOUR RESPECTIVE COMPONENT HERE
  //       component: ProjectInfo
  //     },
  //     {
  //       name: "Construction update",
  //       path: "construction-update",
  //       //ADD YOUR RESPECTIVE COMPONENT HERE
  //       component: ProjectInfo
  //     },
  //   ],
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/TowerDetailsIcon.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  // },
  // {
  //   path: "/leads",
  //   component: Leads,
  //   name: "Leads",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/people.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  // },
  // {
  //   path: "/performance",
  //   component: Performance,
  //   name: "Performance",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/PerformanceIcon.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  // },
  // {
  //   path: "/targets",
  //   component: Targets,
  //   name: "Targets",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/TargetIcon.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  // },
  // {
  //   path: "/requests",
  //   component: Requests,
  //   name: "Requests",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/RequestIcon.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  // },
  // {
  //   path: "/todo",
  //   component: Todo,
  //   name: "Todo",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/TodoIcon.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  // },
  // {
  //   path: "/testComponents",
  //   component: TestComponents,
  //   name: "TestComponents",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/TodoIcon.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  // },

  // Add more routes with their corresponding components and roles...
];

export default sidebarRouteConfig;
