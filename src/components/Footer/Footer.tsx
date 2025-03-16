import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    {/* Контактная информация */}
                    <div className={styles.footerSection}>
                        <h3>Контакты</h3>
                        <p>Телефон: +7 (915) 398-71-12</p>
                        <p>Email: info@printtrip.ru</p>
                        <p>Адрес: г. Москва, Бумажный проезд, 14с3</p>
                    </div>

                    {/* Навигация */}
                    <div className={styles.footerSection}>
                        <h3>Навигация</h3>
                        <ul>
                            <li><a href="/">Главная</a></li>
                            <li><a href="/products">Продукция</a></li>
                            <li><a href="/about">О компании</a></li>
                            <li><a href="/delivery">Доставка</a></li>
                        </ul>
                    </div>

                    {/* Услуги */}
                    <div className={styles.footerSection}>
                        <h3>Услуги</h3>
                        <ul>
                            <li><a href="/services/design">Дизайн</a></li>
                            <li><a href="/services/printing">Печать</a></li>
                            <li><a href="/services/large-format">Широкоформатная печать</a></li>
                            <li><a href="/services/post-printing">Постпечатная обработка</a></li>
                        </ul>
                    </div>

                    {/* Социальные сети */}
                    <div className={styles.footerSection}>
                        <h3>Мы в соцсетях</h3>
                        <div className={styles.socialLinks}>
                            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">VK</a>
                            <a href="https://t.me" target="_blank" rel="noopener noreferrer">Telegram</a>
                            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть футера */}
                <div className={styles.footerBottom}>
                    <p>&copy; 2025 PrintTrip. Все права защищены.</p>
                    <div className={styles.legalLinks}>
                        <a href="/privacy">Политика конфиденциальности</a>
                        <a href="/terms">Условия использования</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 