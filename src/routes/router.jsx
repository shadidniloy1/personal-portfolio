import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume",
    element: <div>Will be uploaded soon</div>,
  },
  {
    path: "/projects",
    element: <div>Projects</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default router;
