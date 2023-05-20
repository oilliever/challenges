import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { TextInputGroup } from './Input';

export const Search = ({ onChange, onClick }) => {
    return (
        <div className='search-group'>
            <TextInputGroup
                onChange={onChange}
                onClick={onClick}
                startIcon={<WorkOutlineIcon />}
                placeholder='Title, companies, expertise or benefits'
            />
        </div>
    );
};
