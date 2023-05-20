import PublicIcon from '@mui/icons-material/Public';
import { CheckBox, Radio, TextInput } from '../Input';

export const HomeSidebar = () => {
    return (
        <div className='home-sidebar'>
            <CheckBox label='Full time' />
            <div className='location-group'>
                <TextInput
                    label='location'
                    startIcon={<PublicIcon />}
                    placeholder='City, state, zip code or country'
                />
                <Radio label='Tokyo' />
                <Radio label='London' />
            </div>
        </div>
    );
};
