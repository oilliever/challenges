import SearchIcon from '@mui/icons-material/Search';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useFetch } from '../../hooks/useFetch';
import { Button } from '../Button';
import { ImageCard } from '../ImageCard';
import { Logo } from '../Logo';
import { SearchBar } from '../SearchBar';

export const Landing = () => {
    const { isLoading, serverError, apiData } = useFetch(
        'https://api.thecatapi.com/v1/breeds'
    );
    return (
        <div className='landing'>
            <div className='landing-1'>
                <div className='col-6'>
                    <Logo />
                    <p>Get to know more about your cat behind</p>
                    <SearchBar
                        endIcon={<SearchIcon />}
                        data={apiData}
                    />
                </div>
            </div>
            <div className='landing-2'>
                <h1>66+ Breeds For you to discover</h1>
                <Button
                    variant='text'
                    text='see more'
                    endIcon={<TrendingFlatIcon />}
                />
                <ImageCard title='Bengal' />
                <ImageCard title='Bengal' />
                <ImageCard title='Bengal' />
                <ImageCard title='Bengal' />
            </div>
        </div>
    );
};
