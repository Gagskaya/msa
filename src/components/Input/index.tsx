import classNames from 'classnames';

import './Input.scss';

interface InputProps {
    placeholder: string;
    className: string;
    value: string;
    onChange: (e: string) => void;
    type: string;
    error: string | null;
}

export const Input: React.FC<InputProps> = ({ placeholder, className, value, onChange, type, error }) => {
    return (
        <input
            type={type} value={value}
            onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
            className={classNames('input', className, error === 'error' ? 'error' : '')} />
    );
};
