import { useFetch } from '../../hooks/useFetch';
import { ImageCard } from '../ImageCard';

export const Lib = () => {
    const { result } = useFetch(
        'https://api.thecatapi.com/v1/images/search?format=json&limit=10'
    );
    console.log(result);
    return (
        <div className='cat-photo'>
            <h1>Other photos</h1>
            <div className='photo-grid'>
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
            </div>
        </div>
    );
};
