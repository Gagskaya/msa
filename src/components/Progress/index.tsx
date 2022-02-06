import './Progress.scss';

interface ProgressProps {
    progressValue: number
};

export const Progress: React.FC<ProgressProps> = ({ progressValue }) => {

    return (
        <progress value={progressValue} max="100" className='progress'></progress>
    );
};
