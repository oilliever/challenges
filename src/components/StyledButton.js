export const StyledButton = ({ text, onClick, icon, ...props }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            {...props}
        >
            <span className='start-icon'>{icon}</span>
            {text}
        </button>
    );
};
