import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Footer } from '../Footer';
import { Lib } from './Lib';
import { Main } from './Main';

export const InfoIndex = () => {
    const { id } = useParams();
    const { apiData } = useFetch(`https://api.thecatapi.com/v1/breeds/${id}`);
    return (
        <div style={{ marginTop: '40px' }}>
            <Main data={apiData} />
            <Lib />
            <Footer />
        </div>
    );
};
