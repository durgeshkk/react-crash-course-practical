// import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from './layouts/MainLayout';
import JobsPage from "./pages/JobsPage";
import NotFoundPage from './pages/NotFoundPage';

// create our router
// Route -> Route Component, we can actually pass path within route but for now, it's only for home page, so we can add index and then an element representing the route.
const router = createBrowserRouter(
  // createRoutesFromElements(<Route index element={<h1>"My Routing App"</h1>} />)
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      {/* Below line is like catch job! */}
      <Route path="*" element={<NotFoundPage />} /> 
    </Route>
  )
);

// Provider is the one providing the router...
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;