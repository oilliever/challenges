import './App.scss';
import { Button } from './components/Button';
import { Quote } from './components/Quote';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState, useEffect } from 'react';

function App() {
    const [quotes, setQuotes] = useState([]);
    const [list, setList] = useState(true);

    useEffect(() => {
        if (quotes.length === 0 && !author)
            fetch('https://quote-garden.onrender.com/api/v3/quotes/random')
                .then((res) => res.json())
                .then((json) => {
                    setQuotes(json.data);
                });
    }, [quotes]);

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        if (author)
            fetch(
                'https://quote-garden.onrender.com/api/v3/quotes/?author=' +
                    author
            )
                .then((res) => res.json())
                .then((json) => {
                    setQuotes(json.data);
                });
    }, [author]);

    const handleRandom = () => {
        setQuotes([]);
        setAuthor(null);
        setList(true);
    };

    return (
        <>
            <div className='header'>
                <Button
                    text='random'
                    endIcon={<AutorenewIcon />}
                    onClick={handleRandom}
                />
            </div>
            <div className='card-quote'>
                {author && (
                    <div className='author-header'>
                        <p>{author}</p>
                    </div>
                )}
                <div className='card-body'>
                    {quotes.map((item, index) => (
                        <>
                            <Quote
                                key={index}
                                text={item.quoteText}
                            />

                            {list && (
                                <button
                                    type='button'
                                    className='btn-quote'
                                    onClick={() => {
                                        setQuotes([]);
                                        setAuthor(item.quoteAuthor);
                                        setList(false);
                                    }}
                                >
                                    <div className='btn-group'>
                                        <div className='desc-group'>
                                            <span className='quote-author'>
                                                {item.quoteAuthor}
                                            </span>
                                            <span className='quote-genre'>
                                                {item.quoteGenre}
                                            </span>
                                        </div>
                                        <div className='btn-icon'>
                                            {<ArrowRightAltIcon />}
                                        </div>
                                    </div>
                                </button>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
