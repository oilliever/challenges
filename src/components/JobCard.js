import { Link } from 'react-router-dom';
import { Badge, LocationBadge, TimeBadge } from './Badge';

export const JobCard = ({
    LinkTo,
    Cover,
    Location,
    Title,
    Type,
    Author,
    Time,
}) => {
    return (
        <div className='job-card'>
            <Link to={`job/${LinkTo}`}>
                <img
                    src={Cover}
                    alt=''
                />
                <div className='job-content'>
                    <span className='job-content-header'>{Author}</span>
                    <span className='job-content-body'>{Title}</span>
                    <div className='job-content-footer'>
                        <Badge title={Type} />
                        <div className='job-info'>
                            <LocationBadge title={Location} />
                            <TimeBadge title={Time} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export const JobCardMini = ({ Cover, Author, Location }) => {
    return (
        <div className='job-card-mini'>
            <img
                src={Cover}
                alt=''
            />
            <div>
                <span className='job-content-header'>{Author}</span>
                <LocationBadge title={Location} />
            </div>
        </div>
    );
};
