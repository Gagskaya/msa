import './Input.scss'
import classNames from 'classnames'

interface InputProps {
    placeholder: string
    className: string
    value: string
    onChange: any
    type: string
    error: string | null
}

export const Input: React.FC<InputProps> = ({ placeholder, className, value, onChange, type, error }) => {
    return <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={classNames('input', className, error === 'error' ? 'error' : '')} />
};
