import './Button.scss'

interface ButtonProps {
    title: string
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
    return <button className='button'>
        {title}
    </button>;
};
