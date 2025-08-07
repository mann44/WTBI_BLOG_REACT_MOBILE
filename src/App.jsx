import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen3 } from "./screens/Screen3";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { TheBergMobile } from "./screens/TheBergMobile";
import { TheBergMobileScreen } from "./screens/TheBergMobileScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <TheBergMobile />,
  },
  {
    path: "/the-berg-mobile-6",
    element: <TheBergMobile />,
  },
  {
    path: "/the-berg-mobile-7",
    element: <TheBergMobileScreen />,
  },
  {
    path: "/the-berg-mobile-3",
    element: <DivWrapper />,
  },
  {
    path: "/the-berg-mobile-eventspage",
    element: <Screen3 />,
  },
  {
    path: "/the-berg-mobile-12",
    element: <Screen4 />,
  },
  {
    path: "/the-berg-mobile-11",
    element: <Screen5 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
