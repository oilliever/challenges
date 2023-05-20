import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';

export const Badge = ({ title }) => {
    return <div className='badge'>{title}</div>;
};

export const LocationBadge = ({ title }) => {
    return (
        <>
            <div className='badge-location'>
                <PublicIcon />
                <span>{title}</span>
            </div>
        </>
    );
};

export const TimeBadge = ({ title }) => {
    return (
        <>
            <div className='badge-time'>
                <AccessTimeIcon />
                <span>{title}</span>
            </div>
        </>
    );
};
