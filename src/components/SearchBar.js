import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchBar = ({ endIcon, placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    return (
        <div className='search'>
            <div className='input-group'>
                <input
                    type='text'
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                {endIcon && <span className='end-icon'>{endIcon}</span>}
            </div>
            {filteredData.length !== 0 && (
                <div className='dataResult'>
                    {filteredData.slice(0, 8).map((value, key) => {
                        return (
                            <Link
                                key={value.id}
                                className='dataItem'
                                to={value.id}
                            >
                                <p>{value.name} </p>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
