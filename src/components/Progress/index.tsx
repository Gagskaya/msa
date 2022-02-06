import { Order } from '../../types/order';

import './Progress.scss';

interface ProgressProps {
    order: Order
};

export const Progress: React.FC<ProgressProps> = ({ order }) => {
    const progressValues = order?.deliveries?.map(delivery => {
        const date = new Date(delivery.date);
        if (date <= new Date()) {
            return 100 / order.deliveries.length;
        }
        return false;
    });

    const progressValue = progressValues?.reduce((total: number, item) => {
        if (item) {
            return total += item;
        }
        else {
            return total;
        };
    }, 0);

    return (
        <progress value={progressValue} max="100" className='progress'></progress>
    );
};
