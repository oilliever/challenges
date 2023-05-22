import { ImageCard } from '../ImageCard';

export const Main = () => {
    return (
        <div className='row'>
            <div className='col-6'>
                <ImageCard />
            </div>
            <div className='col-6 cat-info'>
                <h1>Bengal</h1>
                <p>
                    Bengals are a lot of fun to live with, but they're
                    definitely not the cat for everyone, or for first-time cat
                    owners. Extremely intelligent, curious and active, they
                    demand a lot of interaction and woe betide the owner who
                    doesn't provide it.
                </p>
                <p>
                    <span>Temperament: </span>
                    Alert, Agile, Energetic, Demanding, Intelligent
                </p>
                <p>
                    <span>Origin: </span>
                    United States
                </p>
                <p>
                    <span>Life Span: </span>
                    12 - 15 years
                </p>
            </div>
        </div>
    );
};
