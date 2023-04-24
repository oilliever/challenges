export const WeatherCard = ({
    date,
    src,
    imgAlt,
    units,
    tempLow,
    tempHigh,
}) => {
    return (
        <div className='weather-card'>
            <div className='weather-card-date'>{date}</div>
            <img
                className='weather-card-img'
                src={src}
                alt={imgAlt}
            />
            <div className='weather-card-temp'>
                <span units={units}>{tempLow}</span>
                <span units={units}>{tempHigh}</span>
            </div>
        </div>
    );
};

export const WeatherInfo = ({ title, info, footer, ...prop }) => {
    return (
        <div className='weather-info-card'>
            <p className='info-card-header'>{title}</p>
            <p
                className='info-card-body'
                {...prop}
            >
                {info}
            </p>
            <div className='info-card-footer'>{footer}</div>
        </div>
    );
};
