import Widget from "../dashboard/widget";
import Home from "../documentation/home";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/widget",
    element: <Widget />,
  },
];
