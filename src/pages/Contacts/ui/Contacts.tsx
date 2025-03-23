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

                    // Создаем карту
                    map = new window.ymaps.Map('map', {
                        center: [55.788097, 37.586767],
                        zoom: 15,
                        controls: [
                            'zoomControl',
                            'fullscreenControl',
                            'typeSelector',
                        ],
                        // Отключаем зум колесиком мыши
                        behaviors: ['drag', 'multiTouch']
                    });

                    // Отключаем зум колесиком мыши
                    map.behaviors.disable('scrollZoom');

                    // Создаем метку
                    const placemark = new window.ymaps.Placemark(
                        [55.788035, 37.583956],
                        {
                            balloonContent: 'Print Trip',
                            hintContent: 'Print Trip'
                        },
                        {
                            preset: 'islands#redDotIcon'
                        }
                    );

                    map.geoObjects.add(placemark);
                    
                    // Убираем автоматическое открытие балуна
                    // placemark.balloon.open();
                });
            } else {
                // Если ymaps еще не загружен, загружаем скрипт
                const script = document.createElement('script');
                script.src = 'https://api-maps.yandex.ru/2.1/?apikey=4e86c26f-e7b8-4cb7-9456-7609cb999e3f&lang=ru_RU';
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
                            <div className={cls.contactContent}>
                                <h2 className={cls.sectionTitle}>Адрес</h2>
                                <p>г. Москва, ул. Правды, 24с3</p>
                                <p>Бизнес-центр "Правда"</p>
                            </div>
                        </div>

                        <div className={cls.contactBlock}>
                            <div className={cls.contactContent}>
                                <h2 className={cls.sectionTitle}>Телефоны</h2>
                                <p>+7 (495) 008-00-78</p>
                                <p>+7 (915) 398-71-12</p>
                            </div>
                        </div>

                        <div className={cls.contactBlock}>
                            <div className={cls.contactContent}>
                                <h2 className={cls.sectionTitle}>Email</h2>
                                <p>print-trip@yandex.ru</p>
                            </div>
                        </div>

                        <div className={cls.contactBlock}>
                            <div className={cls.contactContent}>
                                <h2 className={cls.sectionTitle}>Режим работы</h2>
                                <p>Пн-Пт: 9:00 - 18:00</p>
                                <p>Сб-Вс: Выходной</p>
                            </div>
                        </div>
                    </div>

                    <div id="map" className={cls.map}></div>
                </div>
            </div>
        </div>
    );
};

export default Contacts; 