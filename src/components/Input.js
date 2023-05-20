export const TextInputGroup = ({
    placeholder,
    startIcon,
    onChange,
    onClick,
}) => {
    return (
        <div className='button-in'>
            <div className='start-icon'>{startIcon}</div>
            <input
                placeholder={placeholder}
                type='text'
                onChange={onChange}
            />
            <button onClick={onClick}>Search</button>
        </div>
    );
};
export const TextInput = ({ label, placeholder, startIcon }) => {
    return (
        <div className='input-group'>
            <label>{label}</label>
            <div className='input'>
                <div className='start-icon'>{startIcon}</div>
                <input
                    type='text'
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export const CheckBox = ({ label }) => {
    return (
        <label className='form-input'>
            <input type='checkbox' />
            <span>{label}</span>
        </label>
    );
};

export const Radio = ({ label }) => {
    return (
        <label className='form-input'>
            <input type='radio' />
            <span>{label}</span>
        </label>
    );
};
