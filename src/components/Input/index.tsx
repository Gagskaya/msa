import './Input.scss'
import classNames from 'classnames'

interface InputProps {
    placeholder: string
    className: string
}

export const Input: React.FC<InputProps> = ({ placeholder, className }) => {
    return <input placeholder={placeholder} className={classNames('input', className)} />
};
