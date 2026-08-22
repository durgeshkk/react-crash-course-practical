import jobs from '../jobs.json'
import JobListing from './JobListing'

const JobListings = () => {

  const recentJobs = jobs.slice(0,3);
  
  return (
    // <div>JobListing</div>
    // {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* {jobs.map((job) => ( */}
            {recentJobs.map((job) => (
                // Since for all of the jobs listed components, heading, indentation and all will remain same, so grab either of them and paste within...
                <JobListing key={job.id} job={job}/>
            ))}
        </div>
    </div>
    </section>
  )
}

export default JobListings
