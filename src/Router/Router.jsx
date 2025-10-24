import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root/Root';
import Home from '../Components/Home/Home';
import AppsList from '../Components/Apps/AppsList';
import Installation from '../Components/installation/Installation';
import AppDetails from '../Components/AppDetails/AppDetails';
import ErrorPage from '../Components/ErrorPage/ErrorPage';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
     children: [
      { index: true,
        loader: () => fetch("TradingApp.json"),
         Component: Home },
        {path:'/apps',
          loader: () => fetch("AllAppsData.json"),
          Component: AppsList
        },
        {
          path:'/installation',
          loader: () => fetch("AllAppsData.json"),
          Component: Installation
        },
        {
          path:'/appdetails/:id',
          loader: () => fetch("AllAppsData.json"),
          Component: AppDetails
        }
     ]
  },
]);

 