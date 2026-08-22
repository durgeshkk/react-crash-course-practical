// import React from 'react'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import HomeCards from './components/HomeCards';
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />

      {/* <Hero /> */}
      <Hero title='React Dev Testing' subtitle='React Dev passing subtitle via props...'/>

      <HomeCards />
      
      <JobListings />

      <ViewAllJobs />
    </>
  )
}

export default App