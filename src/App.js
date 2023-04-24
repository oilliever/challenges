import './App.scss';
import { WeatherCard, WeatherInfo } from './components/Weather';
import { Input } from './components/Input';
import { Button } from './components/Button';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NearMeIcon from '@mui/icons-material/NearMe';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useEffect, useState } from 'react';

function App() {
    const [isCurr, setIsCurr] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [city, setCity] = useState('');
    const [units, setUnits] = useState('metric');
    const [find, setFind] = useState([]);
    const [data, setData] = useState('');
    const [list, setList] = useState([]);

    const [lat, setLat] = useState();
    const [lon, setLon] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
    }, []);

    let API_URL = '';

    if (isCurr) {
        API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5caf59265a678ca70e57d4763ad8ddcc&q&units=${units}`;
    } else {
        API_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=5caf59265a678ca70e57d4763ad8ddcc&q=${find}&units=${units}`;
    }

    useEffect(() => {
        fetch(API_URL)
            .then((req) => {
                if (req.ok) {
                    return req.json();
                }
                if (req.status === 404) {
                    alert('Not found this city!');
                    return Promise.reject('error 404');
                }
            })
            .then((req) => {
                setData(req);
            });
    }, [API_URL]);

    const handleFindCity = () => {
        setIsCurr(false);
        setFind(city);
        setList((pre) => [...pre, data.city.name]);
        setShowMenu(false);
    };

    const handleSelectCity = (e) => {
        setIsCurr(false);
        setFind(e);
        setShowMenu(false);
    };

    const turnToDate = (e) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var a = new Date(e);
        var date = a.getDate();
        let day = days[a.getDay()];
        let month = months[a.getMonth()];
        return day + ', ' + date + ' ' + month;
        // return day + ', ' + date + ' ' + month;
    };

    const setCurrentLocation = () => {
        setIsCurr(true);
    };

    return (
        <div className='container'>
            <div className='sidebar'>
                {showMenu ? (
                    <div className='sidebar-close'>
                        <Button
                            className='btn-text-icon'
                            text={<CloseIcon />}
                            onClick={() => setShowMenu(false)}
                        />
                    </div>
                ) : (
                    <></>
                )}
                <div
                    className='sidebar-search'
                    style={
                        !showMenu ? { paddingTop: '' } : { paddingTop: '82px' }
                    }
                >
                    <Input
                        type='text'
                        placeholder='Search for places'
                        className='search-menu'
                        onChange={(e) => {
                            setCity(e.target.value);
                        }}
                        onFocus={() => setShowMenu(true)}
                        startIcon={<SearchIcon />}
                    />
                    {showMenu ? (
                        <Button
                            className='btn-primary'
                            text='Search'
                            onClick={handleFindCity}
                        />
                    ) : (
                        <Button
                            className='btn-icon'
                            text={<MyLocationIcon />}
                            onClick={setCurrentLocation}
                        />
                    )}
                </div>
                {showMenu ? (
                    <div className='search-content'>
                        {list &&
                            list.map((e) => (
                                <Button
                                    className='btn-text'
                                    text={e}
                                    endIcon={<ChevronRightIcon />}
                                    onClick={() => handleSelectCity(e)}
                                />
                            ))}
                    </div>
                ) : (
                    data && (
                        <div className='sidebar-content'>
                            <div className='sidebar-img'>
                                <img
                                    style={{
                                        maxHeight: '234px',
                                        maxWidth: '202px',
                                    }}
                                    src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
                                ></img>
                            </div>
                            <div className='sidebar-info'>
                                <>
                                    <p
                                        className='info-temp'
                                        units={
                                            units === 'imperial' ? '°F' : '°C'
                                        }
                                    >
                                        {Math.round(data.list[0].main.temp)}
                                    </p>
                                    <p className='info-text'>
                                        {data.list[0].weather[0].main}
                                    </p>
                                    <p className='info-date'>
                                        Today •{' '}
                                        {turnToDate(data.list[0].dt_txt)}
                                    </p>
                                    <p className='info-location'>
                                        <LocationOnIcon />
                                        {data.city.name}
                                    </p>
                                </>
                            </div>
                        </div>
                    )
                )}
            </div>
            <div className='weather-container'>
                <div className='temp-group'>
                    <Button
                        className={
                            units === 'metric'
                                ? 'btn-icon btn-active'
                                : 'btn-icon'
                        }
                        onClick={() => setUnits('metric')}
                        text='°C'
                    />
                    <Button
                        className={
                            units === 'imperial'
                                ? 'btn-icon btn-active'
                                : 'btn-icon'
                        }
                        onClick={() => setUnits('imperial')}
                        text='°F'
                    />
                </div>
                <div className='week-weather'>
                    {data && (
                        <>
                            <WeatherCard
                                date='Tomorrow'
                                src={`https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`}
                                imgAlt='Iso Rain Day'
                                tempLow={Math.round(data.list[7].main.temp_min)}
                                tempHigh={Math.round(
                                    data.list[7].main.temp_max
                                )}
                                units={units === 'imperial' ? '°F' : '°C'}
                            />
                            <WeatherCard
                                date={turnToDate(data.list[15].dt_txt)}
                                src={`https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png`}
                                imgAlt='Iso Rain Day'
                                tempLow={Math.round(
                                    data.list[15].main.temp_min
                                )}
                                tempHigh={Math.round(
                                    data.list[15].main.temp_max
                                )}
                                units={units === 'imperial' ? '°F' : '°C'}
                            />
                            <WeatherCard
                                date={turnToDate(data.list[23].dt_txt)}
                                src={`https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`}
                                imgAlt='Iso Rain Day'
                                tempLow={Math.round(
                                    data.list[23].main.temp_min
                                )}
                                tempHigh={Math.round(
                                    data.list[23].main.temp_max
                                )}
                                units={units === 'imperial' ? '°F' : '°C'}
                            />
                            <WeatherCard
                                date={turnToDate(data.list[31].dt_txt)}
                                src={`https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`}
                                imgAlt='Iso Rain Day'
                                tempLow={Math.round(
                                    data.list[31].main.temp_min
                                )}
                                tempHigh={Math.round(
                                    data.list[31].main.temp_max
                                )}
                                units={units === 'imperial' ? '°F' : '°C'}
                            />
                            <WeatherCard
                                date={turnToDate(data.list[37].dt_txt)}
                                src={`https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`}
                                imgAlt='Iso Rain Day'
                                tempLow={Math.round(
                                    data.list[39].main.temp_min
                                )}
                                tempHigh={Math.round(
                                    data.list[39].main.temp_max
                                )}
                                units={units === 'imperial' ? '°F' : '°C'}
                            />
                        </>
                    )}
                </div>
                <div className='weather-info'>
                    <p className='info-title'>Today's Hightlights</p>
                    <div className='info-group'>
                        {data && (
                            <>
                                <WeatherInfo
                                    title='Wind status'
                                    info={data.list[0].wind.speed}
                                    data-desc='mph'
                                    footer={
                                        <>
                                            <Button
                                                className='btn-icon'
                                                text={
                                                    <NearMeIcon
                                                        style={{
                                                            rotate: '180deg',
                                                        }}
                                                    />
                                                }
                                            />
                                            <p>WSW</p>
                                        </>
                                    }
                                />
                                <WeatherInfo
                                    title='Humidity'
                                    info={data.list[0].main.humidity}
                                    data-desc='%'
                                    footer={
                                        <div className='humidity-progress'>
                                            <div className='humidity-number'>
                                                <span>0</span>
                                                <span>50</span>
                                                <span>100</span>
                                            </div>
                                            <progress
                                                value={
                                                    data.list[0].main.humidity
                                                }
                                                max='100'
                                            ></progress>
                                            <div className='humidity-percen'>
                                                <span>%</span>
                                            </div>
                                        </div>
                                    }
                                />
                                <WeatherInfo
                                    title='Visibility'
                                    info={data.list[0].visibility}
                                    data-desc='miles'
                                />
                                <WeatherInfo
                                    title='Air Pressure'
                                    info={data.list[0].main.pressure}
                                    data-desc='mb'
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
