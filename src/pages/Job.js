import { JobContent } from '../components/Job/JobContent';
import { JobSidebar } from '../components/Job/JobSidebar';
import { Logo } from '../components/Logo';

export const Job = () => {
    return (
        <>
            <div className='container'>
                <Logo />
                <div className='job-body'>
                    <JobSidebar />
                    <JobContent />
                </div>
            </div>
        </>
    );
};
