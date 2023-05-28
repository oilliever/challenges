import { Link } from 'react-router-dom';

export const ImageCard = ({ title, data }) => {
    return (
        <div className='img-card'>
            <Link
                key={data.id}
                className='dataItem'
                to={`/${data.id}`}
            >
                <img
                    alt=''
                    src={`https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg`}
                />
                {title && <p>{title}</p>}
            </Link>
        </div>
    );
};
