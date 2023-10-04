// routeConfig.js
import Dashboard from "@pages/Dashboard";
import Profile from "@pages/Profile";
// import Stats from "@pages/Stats";
import Customers from "@pages/Customers";
// import TowerDetails from "@pages/TowerDetails";
// import Leads from "@pages/Leads";
// import Performance from "@pages/Performance";
// import Targets from "@pages/Targets";
// import Requests from "@pages/Requests";
// import Todo from "@pages/Todo";
import { MenuBook } from "@mui/icons-material";
// import TestComponents from "@pages/TestComponents";
// import LeadsDetails from "@pages/LeadsDetails";
// import AddProject from "@pages/AddProject";
// import Projects from "@pages/Projects";
// import ProjectInfo from "@pages/projects/ProjectInfo";

// const projectSubPaths = [
//   {
//     name: "Project Insurance",
//     path: "project-insurance",
//     //ADD YOUR RESPECTIVE COMPONENT HERE
//     // component: AddProject,
//   },
//   {
//     name: "Project Info",
//     path: "project-info",
//     //ADD YOUR RESPECTIVE COMPONENT HERE
//     component: ProjectInfo,
//   },
//   {
//     name: "Project Inventory",
//     path: "project-inventory",
//     //ADD YOUR RESPECTIVE COMPONENT HERE
//     component: AddProject,
//   },
//   {
//     name: "Payment Plan",
//     path: "payment-plan",
//     //ADD YOUR RESPECTIVE COMPONENT HERE
//     component: AddProject,
//   },
//   {
//     name: "Construction update",
//     path: "construction-update",
//     //ADD YOUR RESPECTIVE COMPONENT HERE
//     component: AddProject,
//   },
// ];

// const projectChildrens = [
//   {
//     name: "Project Info",
//     path: "project-info",
//     //ADD YOUR RESPECTIVE COMPONENT HERE
//     component: AddProject,
//   },
//   {
//     name: "Project Inventory",
//     path: "project-inventory",
//     //ADD YOUR RESPECTIVE COMPONENT HERE
//     component: AddProject,
//   },
//   {
//     name: "Payment Plan",
//     path: "payment-plan",
//     //ADD YOUR RESPECTIVE COMPONENT HERE
//     component: AddProject,
//   },
//   {
//     name: "Construction update",
//     path: "construction-update",
//     //ADD YOUR RESPECTIVE COMPONENT HERE
//     component: AddProject,
//   },
// ];

const routeConfig = [
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
    // subPath: [
    //   {
    //     name: "Edit",
    //     path: "edit",
    //     component: Todo,
    //   },
    // ],
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
  //   subPath: projectSubPaths,
  //   children: projectChildrens,
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
  //   path: "/add-project",
  //   component: AddProject,
  //   name: "addProjects",
  //   type: "accordian",
  //   subPath: [
  //     {
  //       name: "Project Info",
  //       path: "/project-info",
  //     },
  //     {
  //       name: "Project Inventory",
  //       path: "/project-inventory",
  //     },
  //     {
  //       name: "Payment Plan",
  //       path: "/payment-plan",
  //     },
  //     {
  //       name: "Construction update",
  //       path: "/construction-update",
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
  //   path: "/project-info",
  //   component: ProjectInfoContainer,
  //   name: "Project Info",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/people.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  //   sidebarVisible: false,
  // },

  // {
  //   path: "/project-inventory",
  //   component: Todo,
  //   name: "Project Inventory",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/people.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  //   sidebarVisible: false,
  // },

  // {
  //   path: "/payment-plan",
  //   component: Todo,
  //   name: "Payment Plan",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/people.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  //   sidebarVisible: false,
  // },

  // {
  //   path: "/construction-update",
  //   component: Todo,
  //   name: "Construction update",
  //   roles: ["user", "admin"], // Roles that have access to this route
  //   icon: (
  //     <img
  //       src="/assets/icons/people.svg"
  //       alt="Notification-icon"
  //       width="24"
  //       height="24"
  //     />
  //   ),
  //   sidebarVisible: false,
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
  //   path: "/LeadsDetails",
  //   component: LeadsDetails,
  //   name: "LeadsDetails",
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
    sidebarVisible: false,
  },
];

export default routeConfig;
