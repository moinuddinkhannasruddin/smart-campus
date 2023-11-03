// routeConfig.js
import { MenuBook } from "@mui/icons-material";
import Pagination from "@pages/Pagination";
import Dashboard from "@pages/Dashboard";
import Students from "@pages/Students";
import Admission from "@pages/Students/Admission";
import Profile from "@pages/Profile";
// import AdmissionContainer from "@/containers/students";

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
  {
    // IconButton: <MenuBook />,
    path: "/students",
    component: Students,
    name: "Students",
    // type: "accordian",
    roles: ["user", "admin"], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/CustomerIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
    // children: [
    //   {
    //     name: "Pagination",
    //     path: "admission",
    //     //ADD YOUR RESPECTIVE COMPONENT HERE
    //     component: Admission,
    //   }
    // ]
  },
  {
    path: "/students/admission",
    component: Admission,
    name: "Admission",
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
  {
    path: "/pagination",
    component: Pagination,
    name: "Pagination",
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
  

  // Add more routes with their corresponding components and roles...
];

export default sidebarRouteConfig;


