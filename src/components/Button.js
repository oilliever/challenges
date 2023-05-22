export const Button = ({
    text,
    variant,
    color,
    size,
    onClick,
    disabled,
    disableshadow,
    startIcon,
    endIcon,
}) => {
    const btnSize = size ? `btn-${size}` : '';

    const btnVariant = variant ? `btn-${variant}` : '';
    const btnColor = color ? `btn-${color}` : '';
    let buttonClassName = '';

    if (color) {
        if (variant) {
            buttonClassName = `btn-${variant}-${color} ${btnSize}`;
        } else {
            buttonClassName = `btn-default-${color} ${btnSize}`;
        }
    } else {
        buttonClassName = `${btnSize} ${btnVariant}`;
    }
    if (disableshadow) {
        buttonClassName += `btn-disable-box-shadow`;
    }
    return (
        <button
            type='button'
            variant={variant}
            color={color}
            size={size}
            onClick={onClick}
            disabled={disabled}
            disableshadow={disableshadow}
            className={buttonClassName}
        >
            {startIcon && <span className='start-icon'>{startIcon}</span>}
            {text}
            {endIcon && <span className='end-icon'>{endIcon}</span>}
        </button>
    );
};
