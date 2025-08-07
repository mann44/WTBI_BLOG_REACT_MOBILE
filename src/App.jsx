<<<<<<< HEAD
import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Screen14 from './screens/Screen14';
import { TheBergWorldMap } from './screens/TheBergWorldMap';
import { TheBergWorldMapScreen } from './screens/TheBergWorldMapScreen';

/*
 * The application defines a handful of routes that mirror the original
 * structure of the WTBI project. Screen14 acts as the home page,
 * TheBergWorldMap is a simple form allowing a user to submit their
 * information, and TheBergWorldMapScreen displays an interactive map
 * with pins corresponding to submitted entries. Feel free to expand
 * this router to include additional screens if needed.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Screen14 />,
  },
  {
    // Home screen (Screen14) accessible via the original route used in the
    // existing code base. This alias ensures back buttons continue to work.
    path: '/the-berg-2',
    element: <Screen14 />,
  },
  {
    // Form page where users add themselves to the map. When submitted it
    // stores the entry in localStorage and redirects to the map page.
    path: '/the-berg-world-map-1',
    element: <TheBergWorldMap />,
  },
  {
    // Interactive world map page that visualises the stored entries.
    path: '/the-berg-world-map',
    element: <TheBergWorldMapScreen />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
=======
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
>>>>>>> fullfiles
