import { useRoutes } from "react-router-dom";
import Invitation from "../pages/invitation";
import Dashboard from "../sections/dashboard";

export const dashboardRoutes = [
  {
    path: "/",
    index: true,
    element: <Invitation />,
  },
  {
    path: "/vip",
    element: <Invitation />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
];

export function Router() {
  return useRoutes(dashboardRoutes);
}
