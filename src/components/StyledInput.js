import { useState } from 'react';
import { StyledButton as Button } from './StyledButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const StyledCheckbox = ({ id, label, checked, onChange, ...prop }) => {
    return (
        <>
            <input
                type='checkbox'
                checked={checked}
                onChange={onChange}
                id={id}
                {...prop}
            />
            <label
                htmlFor={id}
                data-content={label}
            >
                {label}
            </label>
        </>
    );
};

export const Task = ({ id, label, checked, onClick, onChange, ...prop }) => {
    return (
        <div className='checkbox-group'>
            <StyledCheckbox
                className='checkbox-combo'
                type='checkbox'
                label={label}
                checked={checked}
                onChange={onChange}
                id={id}
                {...prop}
            />
            <Button
                className='btn-icon-danger'
                onClick={onClick}
                text={<DeleteOutlineIcon />}
            />
        </div>
    );
};

export const StyledTextInput = ({ action, index, ...props }) => {
    return (
        <input
            type='text'
            onChange={() => action(index)}
            {...props}
        />
    );
};
