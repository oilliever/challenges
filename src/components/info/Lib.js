import { ImageCard } from '../ImageCard';

export const Lib = () => {
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
