export const Button = ({ onClick, text, endIcon }) => {
    return (
        <button
            className='btn-text'
            type='button'
            onClick={onClick}
        >
            {text}
            {endIcon}
        </button>
    );
};
