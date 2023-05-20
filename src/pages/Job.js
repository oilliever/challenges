import { JobContent } from '../components/Job/JobContent';
import { JobSidebar } from '../components/Job/JobSidebar';
import { Logo } from '../components/Logo';
import { GetDetails } from '../hooks/useFetch';

export const Job = () => {
    const data = GetDetails();

    return (
        <>
            <div className='container'>
                <Logo />
                {data === undefined ? (
                    <p>Loading...</p>
                ) : (
                    <div className='job-body'>
                        <JobSidebar />
                        <JobContent data={data} />
                    </div>
                )}
            </div>
        </>
    );
};
