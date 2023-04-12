import './App.scss';
import Button from './components/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function App() {
    return (
        <div className='container'>
            <Button
                color='default'
                variant=''
                text='Default default'
            />
            <Button
                color='default'
                variant='outline'
                text='Outline default'
            />
            <Button
                color='default'
                variant='text'
                text='Text default'
            />

            <Button
                color='primary'
                variant=''
                text='Default primary'
            />
            <Button
                color='primary'
                variant='outline'
                text='Outline primary'
            />
            <Button
                color='primary'
                variant='text'
                text='Text primary'
            />
            <Button
                color='secondary'
                variant=''
                text='Default secondary'
            />
            <Button
                color='secondary'
                variant='outline'
                text='Outline secondary'
            />
            <Button
                color='secondary'
                variant='text'
                text='Text secondary'
            />
            <Button
                color='danger'
                variant=''
                text='Default danger'
            />
            <Button
                color='danger'
                variant='outline'
                text='Outline danger'
            />
            <Button
                color='danger'
                variant='text'
                text='Text danger'
            />
            <Button
                color='danger'
                variant='text'
                text='With start icon'
                startIcon={<AddShoppingCartIcon />}
            />
            <Button
                color='danger'
                variant='text'
                text='With end icon'
                endIcon={<AddShoppingCartIcon />}
            />
            <Button
                color='danger'
                variant='text'
                text='With both'
                startIcon={<AddShoppingCartIcon />}
                endIcon={<AddShoppingCartIcon />}
            />
            <Button
                color='danger'
                variant=''
                text='Small button'
                size='sm'
            />
            <Button
                color='danger'
                variant=''
                text='Medium button'
                size='md'
            />
            <Button
                color='danger'
                variant=''
                text='Large button'
                size='lg'
            />
            <Button
                color='danger'
                variant=''
                text='Disabled default button'
                disabled
            />
            <Button
                color='danger'
                variant='outline'
                text='Disabled outline button'
                disabled
            />
            <Button
                color='danger'
                variant='text'
                text='Disabled text button'
                disabled
            />
            <Button
                color='danger'
                variant=''
                text='Disable box shadow'
                disableshadow
            />
        </div>
    );
}

export default App;
