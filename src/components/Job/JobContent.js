import moment from 'moment';
import { Badge, TimeBadge } from '../Badge';
import { JobCardMini } from '../JobCard';

export const JobContent = ({ data }) => {
    return (
        <div className='job-content'>
            <p className='job-title'>{data.name}</p>
            <Badge title={data.type} />
            <TimeBadge title={moment(data.publication_date).fromNow()} />
            <JobCardMini
                Location={data.locations[0].name}
                Author={data.company.name}
                Cover={`https://assets.themuse.com/uploaded/companies/${data.company.id}/small_logo.png`}
            />
            <p dangerouslySetInnerHTML={{ __html: data.contents }} />
        </div>
    );
};
