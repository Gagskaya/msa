import './Progress.scss';

interface ProgressProps {
    newProgress: number
}

export const Progress: React.FC<ProgressProps> = ({ newProgress }) => {

    return (
        <progress value={newProgress} max="100" className='progress'></progress>
    );
};
