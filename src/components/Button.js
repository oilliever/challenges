export const Button = ({ text, endIcon, ...prop }) => {
    return (
        <button
            type='button'
            {...prop}
        >
            {text}
            {endIcon && <icon className='end-icon'>{endIcon}</icon>}
        </button>
    );
};
