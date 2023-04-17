export const Quote = ({ index, text }) => {
    return (
        <div className='quote-group'>
            <div className='quote-deco'></div>
            <blockquote
                key={index}
                className='quote-content'
            >
                {text}
            </blockquote>
        </div>
    );
};
