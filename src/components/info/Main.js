import { GeneratePoint } from '../GeneratePoint';

export const Main = ({ data }) => {
    return (
        <>
            {!data ? (
                <span>Loading.....</span>
            ) : (
                <div className='row'>
                    <div className='col-6'>
                        <img
                            style={{
                                width: '371.04px',
                                height: '371.04px',
                                borderRadius: '24px',
                            }}
                            alt=''
                            src={`https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg`}
                        />
                    </div>
                    <div className='col-6 cat-info'>
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                        <p>
                            <span>Temperament: </span>
                            {data.temperament}
                        </p>
                        <p>
                            <span>Origin: </span>
                            {data.origin}
                        </p>
                        <p>
                            <span>Life Span: </span>
                            {data.life_span} years
                        </p>
                        <p className='point-group'>
                            <span>Adaptability: </span>
                            <GeneratePoint point={data.adaptability} />
                        </p>
                        <p className='point-group'>
                            <span>Affection level: </span>
                            <GeneratePoint point={data.affection_level} />
                        </p>
                        <p className='point-group'>
                            <span>Child Friendly: </span>
                            <GeneratePoint point={data.child_friendly} />
                        </p>
                        <p className='point-group'>
                            <span>Grooming: </span>
                            <GeneratePoint point={data.grooming} />
                        </p>
                        <p className='point-group'>
                            <span>Intelligence: </span>
                            <GeneratePoint point={data.intelligence} />
                        </p>
                        <p className='point-group'>
                            <span>Health issues: </span>
                            <GeneratePoint point={data.health_issues} />
                        </p>
                        <p className='point-group'>
                            <span>Social needs: </span>
                            <GeneratePoint point={data.social_needs} />
                        </p>
                        <p className='point-group'>
                            <span>Stranger friendly: </span>
                            <GeneratePoint point={data.stranger_friendly} />
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};
