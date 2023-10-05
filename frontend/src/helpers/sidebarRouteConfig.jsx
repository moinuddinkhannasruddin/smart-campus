// routeConfig.js
import { MenuBook } from "@mui/icons-material";
import Customers from "@pages/Customers";
import Dashboard from "@pages/Dashboard";
import Students from "@/pages/Students";
import Admission from "@/pages/Students/Admission";
import Profile from "@pages/Profile";

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
    type: "accordian",
    roles: ["user", "admin"], // Roles that have access to this route
    icon: (
      <img
        src="/assets/icons/CustomerIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
    children: [
      {
        name: "Admission",
        path: "admission",
        //ADD YOUR RESPECTIVE COMPONENT HERE
        component: Admission,
      }
    ]
  },
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

  // Add more routes with their corresponding components and roles...
];

export default sidebarRouteConfig;
