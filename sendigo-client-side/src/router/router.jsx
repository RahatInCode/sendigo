import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import OurServices from "../pages/OurServices";



const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children: [
      {
      index: true,
      Component: Home
      },
      {
        path:"services",
        Component:OurServices
      },
      {
        path:"services",
        Component:OurServices
      },
      {
        path:"services",
        Component:OurServices
      },
      {
        path:"services",
        Component:OurServices
      },
    ],
  },
]);

export default router;