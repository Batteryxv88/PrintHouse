import cls from './Delivery.module.scss';
import YandexLogo from 'shared/assets/icons/yandex-delivery.svg?url';
import DostavistaLogo from 'shared/assets/icons/dostavista.svg?url';
import DeliveryImage from 'shared/assets/pictures/delivery.svg?url';

const Delivery = () => {
    return (
        <div className={cls.delivery}>
            <div className={cls.container}>
                <h1 className={cls.title}>Оплата и доставка</h1>
                
                <div className={cls.content}>
                    <div className={cls.text}>
                        <p>
                            Доставка продукции осуществляется по Москве в пределах МКАД курьерскими службами 
                            Яндекс Доставка и Достависта за счет клиента. Стоимость доставки рассчитывается 
                            индивидуально для каждого заказа.
                        </p>
                        <p>
                            Если сумма заказа превышает 20 000 рублей, доставка осуществляется за наш счет. 
                            Для защиты вашего заказа на случай форс-мажорных ситуаций при оформлении доставки 
                            в поле "Ценность груза" вносим его полную стоимость.
                        </p>
                    </div>
                    
                    <div className={cls.imageWrapper}>
                        <img src={DeliveryImage} alt="Доставка" className={cls.image} />
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                            <img src={YandexLogo} alt="Яндекс Доставка" style={{ height: '40px' }} />
                            <img src={DostavistaLogo} alt="Достависта" style={{ height: '40px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery; 