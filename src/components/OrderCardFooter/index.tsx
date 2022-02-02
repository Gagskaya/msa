import './OrderCardFooter.scss'

export const OrderCardFooter = () => {
    return <div className="order-card__footer">
        <div className="order-card__footer-date">
            <span>Окт</span>
            <span>28</span>
        </div>
        <div className="order-card__footer-info">
            <h5>
                Ближайшая доставка
                <span>в понедельник –</span>
            </h5>
            <div>
                <p>с 10:00 до 12:00</p>
                <p>Работа на объекте в Басма...</p>
            </div>

        </div>
    </div>
};
