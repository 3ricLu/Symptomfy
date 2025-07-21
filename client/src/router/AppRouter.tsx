import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import { allRoutes } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: allRoutes,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
