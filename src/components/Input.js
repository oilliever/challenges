import { useState } from 'react';
const Input = ({
    text,
    variant,
    color,
    size,
    onClick,
    disabled,
    disableshadow,
    startIcon,
    endIcon,
    placeholder,
    error,
    helperText,
    label,
    value,
    fullWidth,
    multiline,
    ...props
}) => {
    const inputError = error ? 'input-field input-error' : 'input-field';
    const inputSize = size ? `input-${size}` : '';
    const isFullWidth = fullWidth ? `input-fullWidth` : '';

    const isMultiline = multiline ? `input-multiline` : '';

    let buttonClassName = `${inputError} ${isFullWidth}`;

    const [message, setMessage] = useState(value);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    if (isMultiline) {
        return (
            <div className={buttonClassName}>
                <label>{label}</label>
                <div className='input-group'>
                    <textarea
                        size={size}
                        placeholder={placeholder}
                        disabled={disabled}
                        helperText={helperText}
                        className={inputSize}
                        {...props}
                    ></textarea>
                </div>
                <p className='helper-text'>{helperText}</p>
            </div>
        );
    } else {
        return (
            <div className={buttonClassName}>
                <label>{label}</label>
                <div className='input-group'>
                    {startIcon && (
                        <startIcon className='start-icon'>
                            {startIcon}
                        </startIcon>
                    )}
                    <input
                        type='text'
                        size={size}
                        placeholder={placeholder}
                        disabled={disabled}
                        helperText={helperText}
                        value={message}
                        onChange={handleChange}
                        className={inputSize}
                        {...props}
                    />
                    {endIcon && (
                        <endIcon className='end-icon'>{endIcon}</endIcon>
                    )}
                </div>
                <p className='helper-text'>{helperText}</p>
            </div>
        );
    }
};
export default Input;
