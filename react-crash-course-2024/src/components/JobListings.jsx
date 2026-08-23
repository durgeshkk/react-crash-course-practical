import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      // init fetchJobs
      const fetchJobs = async () => {
        const apiUrl = isHome
          ? 'http://localhost:8000/jobs?_page=1&_per_page=3'
          : 'http://localhost:8000/jobs';

        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJobs(isHome ? data.data : data);
        } catch(error) {
          console.log('Error fetchin data', error);
        } finally {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setLoading(false);
        }
      }

      // trigger fetchJobs
      fetchJobs();
    }, 
    [] // dependent array
  );

  return (
    // <div>JobListing</div>
    // {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {
          loading ? (
            <Spinner loading={loading}/>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                  <JobListing key={job.id} job={job}/>
              ))}
            </div>
          )
        }
    </div>
    </section>
  )
}

export default JobListings