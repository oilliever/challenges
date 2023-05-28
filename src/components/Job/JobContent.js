import moment from 'moment';
import { useParams } from 'react-router';
import { useFetchForDetail } from '../../hooks/useFetch';
import { Badge, TimeBadge } from '../Badge';
import { JobCardMini } from '../JobCard';

export const JobContent = ({ data }) => {
    const { id } = useParams();
    const { apiData } = useFetchForDetail(
        `https://www.themuse.com/api/public/jobs/${id}`
    );
    return (
        <>
            {!apiData ? (
                <p>Loading...</p>
            ) : (
                <div className='job-content'>
                    <p className='job-title'>{apiData.name}</p>
                    <Badge title={apiData.type} />
                    <TimeBadge
                        title={moment(apiData.publication_date).fromNow()}
                    />
                    <JobCardMini
                        Location={apiData.locations[0].name}
                        Author={apiData.company.name}
                        Cover={`https://assets.themuse.com/uploaded/companies/${apiData.company.id}/small_logo.png`}
                    />
                    <p dangerouslySetInnerHTML={{ __html: apiData.contents }} />
                </div>
            )}
        </>
    );
};
