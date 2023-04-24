export const Input = ({ action, index, startIcon, ref, ...props }) => {
    return (
        <div className='input-group'>
            <input
                type='text'
                {...props}
            />
            {startIcon && <icon className='start-icon'>{startIcon}</icon>}
        </div>
    );
};
