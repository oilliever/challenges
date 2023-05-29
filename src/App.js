import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import './App.scss';
import Input from './components/Input';

function App() {
    return (
        <div className='container'>
            <Input
                label='Label'
                placeholder='Placeholder'
            />
            <Input
                label='Label'
                placeholder='Placeholder'
                error
            />
            <Input
                label='Label'
                placeholder='Placeholder'
                disabled
            />
            <Input
                label='Label'
                placeholder='Placeholder'
                helperText='Some thing text'
            />
            <Input
                label='Label'
                placeholder='Placeholder'
                helperText='Some thing text'
                error
            />
            <div></div>
            <Input
                label='Label'
                placeholder='Placeholder'
                helperText='Some thing text'
                startIcon={<LocalPhoneIcon />}
            />
            <Input
                label='Label'
                placeholder='Placeholder'
                helperText='Some thing text'
                endIcon={<LockIcon />}
            />
            <Input
                label='Label'
                placeholder='Placeholder'
                helperText='Some thing text'
                value='Text'
            />
            <Input
                label='Label'
                placeholder='Placeholder'
                helperText='Input size small'
                size='sm'
            />
            <Input
                label='Label'
                placeholder='Placeholder'
                helperText='Input size medium'
                size='md'
            />
            <div></div>
            <Input
                label='Label'
                placeholder='Placeholder'
                helperText='Full width input'
                fullWidth
            />
            <Input
                label='Label'
                placeholder='Placeholder'
                helperText='Multiline'
                multiline
                rows='5'
            />
        </div>
    );
}

export default App;
