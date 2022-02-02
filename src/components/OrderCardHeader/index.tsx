import './OrderCardHeader.scss'
import { Progress } from '../Progress';

export const OrderCardHeader = () => {
    return <div className="order-card__header">
        <div className="order-card__header-title">
            <h2>6 дней</h2>
            <div>
                <span>PRO рацион</span>
                <h4>2000 кКал</h4>
            </div>

        </div>
        <div className="order-card__header-progress">
            <Progress />
            <div className="order-card__header-progress-footer">
                <p>20 окт</p>
                <p>Осталось 25 дней</p>
                <p>10 ноя </p>
            </div>
        </div>
    </div>
};
