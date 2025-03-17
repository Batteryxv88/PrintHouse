import { useEffect } from 'react';
import cls from './Contacts.module.scss';

declare global {
    interface Window {
        ymaps: any;
    }
}

const Contacts = () => {
    useEffect(() => {
        let map: any = null;

        const initMap = () => {
            if (window.ymaps) {
                window.ymaps.ready(() => {
                    // Очищаем контейнер карты
                    const mapContainer = document.getElementById('map');
                    if (mapContainer) {
                        mapContainer.innerHTML = '';
                    }

                    map = new window.ymaps.Map('map', {
                        center: [55.76, 37.64], // Координаты офиса в Москве
                        zoom: 15,
                    });

                    const placemark = new window.ymaps.Placemark(
                        [55.76, 37.64],
                        {
                            balloonContent: 'Print Trip',
                            hintContent: 'Наш офис',
                        },
                        {
                            preset: 'islands#redStretchyIcon',
                        }
                    );

                    map.geoObjects.add(placemark);
                });
            } else {
                // Если ymaps еще не загружен, загружаем скрипт
                const script = document.createElement('script');
                script.src = 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU';
                script.async = true;
                script.onload = initMap;
                document.body.appendChild(script);
            }
        };

        initMap();

        return () => {
            // Очищаем карту
            if (map) {
                map.destroy();
            }
        };
    }, []);

    return (
        <div className={cls.contacts}>
            <div className={cls.container}>
                <h1 className={cls.title}>Контакты</h1>
                
                <div className={cls.content}>
                    <div className={cls.info}>
                        <div className={cls.contactBlock}>
                            <h2 className={cls.sectionTitle}>Адрес</h2>
                            <p>г. Москва, Бумажный проезд, 14с3</p>
                            <p>Бизнес-центр "Бумажный"</p>
                        </div>

                        <div className={cls.contactBlock}>
                            <h2 className={cls.sectionTitle}>Телефоны</h2>
                            <p>+7 (495) 008-00-78</p>
                            <p>+7 (915) 398-71-12</p>
                        </div>

                        <div className={cls.contactBlock}>
                            <h2 className={cls.sectionTitle}>Email</h2>
                            <p>print-trip@yandex.ru</p>
                        </div>

                        <div className={cls.contactBlock}>
                            <h2 className={cls.sectionTitle}>Режим работы</h2>
                            <p>Пн-Пт: 9:00 - 18:00</p>
                            <p>Сб-Вс: Выходной</p>
                        </div>
                    </div>

                    <div id="map" className={cls.map}></div>
                </div>
            </div>
        </div>
    );
};

export default Contacts; 