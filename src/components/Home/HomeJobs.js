import moment from 'moment';
import { JobCard } from '../JobCard';

export const HomeJobs = ({ data }) => {
    return (
        <>
            <div className='jobs-list'>
                {data.length < 1 ? (
                    <p>Not found</p>
                ) : (
                    <>
                        {data.map((e) => (
                            <JobCard
                                key={e.id}
                                Cover={`https://assets.themuse.com/uploaded/companies/${e.company.id}/small_logo.png`}
                                Author={e.company.name}
                                Title={e.name}
                                Type={e.type}
                                Location={
                                    e.locations.length
                                        ? e.locations[0].name
                                        : 'Empty'
                                }
                                Time={moment(e.publication_date).fromNow()}
                                LinkTo={e.id}
                            />
                        ))}
                    </>
                )}
            </div>
        </>
    );
};
