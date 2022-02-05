import { memo } from 'react';

import './Progress.scss';

const Progress = () => {
    return <progress value='100' className='progress'></progress>
};

export default memo(Progress);