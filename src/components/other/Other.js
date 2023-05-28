import { useFetch } from '../../hooks/useFetch';
import { ImageCard } from '../ImageCard';

export const Other = () => {
    const { isLoading, serverError, apiData } = useFetch(
        'https://api.thecatapi.com/v1/breeds?limit=4'
    );
    return (
        <>
            {!apiData ? (
                <span>Loading.....</span>
            ) : (
                <>
                    {Object.assign(apiData).map((e) => (
                        <ImageCard
                            data={e}
                            title={e.name}
                        />
                    ))}
                </>
            )}
        </>
    );
};
