// import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

// create our router
// Route -> Route Component, we can actually pass path within route but for now, it's only for home page, so we can add index and then an element representing the route.
const router = createBrowserRouter(
  // createRoutesFromElements(<Route index element={<h1>"My Routing App"</h1>} />)
  createRoutesFromElements(<Route index element={<HomePage />} />)
);

// Provider is the one providing the router...
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

{/* const App = () => {
  return (
    <>
      <Navbar />

      <Hero title='React Dev Testing' subtitle='React Dev passing subtitle via props...' />

      <HomeCards />

      <JobListings />

      <ViewAllJobs />
    </>
  )
} */}
