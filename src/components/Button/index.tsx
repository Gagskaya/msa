import './Button.scss'

interface ButtonProps {
    title: string
    type: any
}

export const Button: React.FC<ButtonProps> = ({ title, type }) => {
    return <button className='button' type={type}>
        {title}
    </button>;
};
