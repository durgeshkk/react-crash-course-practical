import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from '../components/Spinner';

const JobPageUseEffectHook = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchJob = async () => {
        try {
          const res = await fetch(`/api/jobs/${id}`);
          const data = await res.json();
          setJob(data);
        } catch(error) {
          console.log('Error fetchin data', error);
        } finally {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setLoading(false);
        }
      }

      fetchJob();
    }, [])

    return (
        loading 
            ? <Spinner />
            : <h1>{job.title}</h1>
    )
}

export default JobPageUseEffectHook