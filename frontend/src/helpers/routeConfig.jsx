// routeConfig.js
import Dashboard from "@pages/Dashboard";
import Profile from "@pages/Profile";
import Customers from "@pages/Customers";
import { MenuBook } from "@mui/icons-material";
import Admission from "@/pages/Students/Admission";
import Students from "@/pages/Students";

const studentSubPath = [
  {
    name: "Admission",
    path: "admission",
    //ADD YOUR RESPECTIVE COMPONENT HERE
    component: Admission,
  }
];

const studentsChildrens = [
  {
    name: "Admission",
    path: "admission",
    //ADD YOUR RESPECTIVE COMPONENT HERE
    component: Admission,
  },
];

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
  },
  {
    // IconButton: <MenuBook />,
    path: "/students",
    component: Students,
    name: "Students",
    type: "accordian",
    roles: ["user", "admin"], // Roles that have access to this route
    subPath: studentSubPath,
    children: studentsChildrens,
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
