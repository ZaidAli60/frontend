import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function RouterProvider({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default RouterProvider;
