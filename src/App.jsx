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